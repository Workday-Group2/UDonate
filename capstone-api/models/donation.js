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
            n.id,
            n.name,
            n.category,
            n.image_url,
            n.user_id,
            n.created_at,
            n.quantity,
            u.email
            
            FROM donation AS n
                LEFT JOIN users AS u ON u.id = n.user_id
            WHERE n.id = $1`)
        

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
            SELECT n.id,
                   n.name,
                   n.category,
                   n.quantity,
                   n.image_url AS "imageUrl",
                   n.user_id AS "userId",
                   u.email AS "userEmail",
                   n.created_at AS "createdAt"
            FROM donation AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE n.user_id = (SELECT users.id FROM users WHERE email = $1)
            ORDER BY n.created_at DESC
            `,[user.email]
        )
        return results.rows
    }

}

module.exports = Donation