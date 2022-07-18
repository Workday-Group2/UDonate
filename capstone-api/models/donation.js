const db = require("../db");
const { BadRequestError} = require("../utils/errors");
const User = require("../models/user")

class Donation {
    static async createDonation({user, post}) {
        const requireFields = ["name", "category", "quantity", "image_url"]
        requireFields.forEach(field => {
            if (!post.hasOwnProperty(field)) {
                throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
        })
            
        const result = await db.query(
            `
            INSERT INTO donation (user_id, name, category, quantity, image_url)
            VALUES ((SELECT id FROM users WHERE email = $1), $2, $3, $4, $5)
            RETURNING id,
                    user_id AS "userId",
                    name,
                    category,
                    quantity,
                    image_url AS "imageUrl",
                    created_at AS "createdAt"
            `, 
            [user.email, post.name, post.category, post.quantity, post.image_url]
        )
        return result.rows[0]
    }

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
            u.email
            
            FROM donation AS d
                LEFT JOIN users AS u ON u.id = d.user_id
            WHERE d.id = $1`)
        

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
                   AVG(r.rating)
            FROM donation AS d
                LEFT JOIN users AS u ON u.id = d.user_id
                LEFT JOIN rating AS r ON r.donation_id = d.id
            WHERE d.user_id = (SELECT users.id FROM users WHERE email = $1)
            ORDER BY d.created_at DESC
            `,[user.email]
        )
        return results.rows
    }

}

module.exports = Donation