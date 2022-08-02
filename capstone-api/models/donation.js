const db = require("../db");
const { BadRequestError} = require("../utils/errors");
const User = require("../models/user")

class Donation {
    //creating a donation
    static async createDonation({user, post}) {
        const requireFields = ["name", "category", "quantity", "image_url", "expiration_date", "donation_desc", "location"]
        requireFields.forEach((field) => {
            if (!post.hasOwnProperty(field)) {
                throw new BadRequestError(`Required field - ${field} - missing from request body.`)
              }
            }) 
        const result = await db.query(
            `
            INSERT INTO donation (user_id, user_email, name, category, quantity, image_url, expiration_date, donation_desc, location)
            VALUES ((SELECT id FROM users WHERE email = $1), (SELECT email FROM users WHERE email = $2), $3, $4, 
            $5, $6, $7, $8, $9)
            RETURNING id,
                    user_email,
                    user_id AS "userId",
                    name,
                    category,
                    quantity,
                    image_url AS "imageUrl",
                    expiration_date AS "expirationDate",
                    created_at AS "createdAt",
                    donation_desc AS "donation description",
                    location
        
            `, 
            [user.email, user.email, post.name, post.category, post.quantity, post.image_url, post.expiration_date, post.donation_desc, post.location]
        )
        return result.rows[0]
    }

    //fetching a specific donation by it's ID
    static async fetchDonationById(id){
        if(!id) {
            throw new BadRequestError("Please provide ID")
        }
        const query = ( `SELECT 
            d.id,
            d.name,
            d.category,
            d.image_url,
            d.user_id,
            d.created_at,
            d.quantity,
            u.username,
            d.donation_desc,
            d.location,
            d.bookee_user_id,
            u.email,
            r.donater_id,
            d.expiration_date,
            CAST(AVG(r.rating) AS DECIMAL(10,1)) AS "avgRating",
            COUNT(r.rating) AS "totalRatings"
            FROM donation AS d
                LEFT JOIN users AS u ON u.id = d.user_id
                LEFT JOIN rating AS r ON r.email = d.user_email
            WHERE d.id = $1
            GROUP BY d.id, u.username, u.email, r.donater_id
            `)
        

        const result = await db.query(query, [id])

        const donation = result.rows[0]
        if(!donation){
            throw new NotFoundError
        }
        return donation
    }

    static async listDonationForUser({user}) {
        const results = await db.query(
            `
            SELECT d.id,
                   d.name,
                   d.category,
                   d.quantity,
                   d.image_url AS "imageUrl",
                   d.user_id AS "userId",
                   u.email AS "userEmail",
                   d.created_at AS "createdAt",
                   d.donation_desc,
                   d.location,
                   d.bookee_user_id,
                   CAST(AVG(r.rating) AS DECIMAL(10,1)) AS "avgRating",
                   COUNT(r.rating) AS "totalRatings"
            FROM donation AS d
                LEFT JOIN users AS u ON u.id = d.user_id
                LEFT JOIN rating AS r ON r.donation_id = d.id
            WHERE d.user_id = (SELECT users.id FROM users WHERE email = $1)
            GROUP BY d.id, u.email
            ORDER BY d.created_at DESC
            `,[user.email]
        )
        return results.rows
    }

    static async listDonationForAll({user}) {
        const results = await db.query(
            `
            SELECT d.id,
                   d.name,
                   u.email,
                   d.category,
                   d.quantity,
                   d.image_url AS "imageUrl",
                   d.user_id AS "userId",
                   u.username AS "donaterUsername",
                   u.profile_pic AS "donater_profilePic",
                   d.created_at AS "createdAt",
                   d.donation_desc,
                   d.location,
                   d.bookee_user_id,
                   d.expiration_date,
                   CAST(AVG(r.rating) AS DECIMAL(10,1)) AS "avgRating",
                   COUNT(r.rating) AS "totalRatings"
            FROM donation AS d
                LEFT JOIN users AS u ON u.id = d.user_id
                LEFT JOIN rating AS r ON r.donation_id = d.id
            WHERE d.bookee_user_id IS NULL
            GROUP BY d.id, u.username, u.email, u.profile_pic
            ORDER BY d.created_at DESC
            `
        )
        return results.rows
    }

}

module.exports = Donation