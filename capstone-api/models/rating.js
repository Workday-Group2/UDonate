const db = require("../db")
const { BadRequestError } = require("../utils/errors")

class Rating {
    static async createRatingForDonation({ rating, user, donationId }) {
        if (!Number(rating) || Number(rating) <= 0 || Number(rating) > 5) {
          throw new BadRequestError(`Invalid rating provided. Must be an integer between 1-5.`)
        }
        // check if user has already added a rating for this donation
        const existingRating = await Rating.fetchRatingForDonationByUser({ user, donationId })
        if (existingRating) {
          throw new BadRequestError(`Users aren't allowed to leave multiple ratings for a single donation.`)
        }
        // otherwise insert a new record into the database
        const results = await db.query(
          `
            INSERT INTO rating (rating, user_id, donation_id, donater_id, email)
            VALUES ($1, (SELECT id FROM users WHERE email = $2), $3, (SELECT donation.user_id FROM donation WHERE id = $3 ), (SELECT email FROM users WHERE id = $4))
            RETURNING rating, user_id AS "rater_id" , donation_id, donater_id, created_at;
          `,
          [rating, user.email, donationId]
        )
    
        return results.rows[0]
      }
    
      // fetch a user's rating of a donation
      static async fetchRatingForDonationByUser({ user, donationId }) {
        const results = await db.query(
          `
            SELECT rating, user_id, donation_id, created_at
            FROM rating
            WHERE user_id = (SELECT id FROM users WHERE email = $1) AND donation_id = $2
          `,
          [user.email, donationId]
        )
    
        return results.rows[0]
      }

     
       static async fetchDonaterRating({  donaterId }) {
        const results = await db.query(
          `
            SELECT CAST(AVG(r.rating) AS DECIMAL(10,1)) AS "avgRating", r.donater_id, COUNT(r.rating) AS "totalRatings"
            FROM rating AS r
            WHERE r.donater_id = $1
            GROUP BY r.donater_id
          `,
          [donaterId]
        )
    
        return results.rows[0]
      }
}

module.exports = Rating