const db = require("../db")
const { BadRequestError} = require("../utils/errors");
 
class BookingReview {
   static async createBookingReview({ comment, user, donationId }) {

       const results = await db.query (
           `
           INSERT INTO review (donation_id, user_id, comment)
           VALUES ($1, (SELECT id FROM users WHERE email = $2), $3)
           RETURNING user_id, donation_id, comment, created_at;
           `,
           [donationId, user.email, comment]
       )

       return results.rows[0]
   }
 
}

module.exports = BookingReview