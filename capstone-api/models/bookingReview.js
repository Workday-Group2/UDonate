const db = require("../db")
const { BadRequestError} = require("../utils/errors");
 
class BookingReview {
   static async createBookingReview({ comment, user, bookingId }) {
        // const requireFields = ["comment"]
        // requireFields.forEach((field) => {
        //     if (!comment.hasOwnProperty(field)) {
        //         throw new BadRequestError(`Required field - ${field} - missing from request body.`)
        //     }
        //     }) 
 
       const results = await db.query (
           `
           INSERT INTO review (booking_comment_id, user_id, comment)
           VALUES ($1, (SELECT id FROM users WHERE email = $2), $3)
           RETURNING user_id, booking_comment_id, comment, created_at;
           `,
           [comment, user.email, bookingId]
       )
      
       return results.rows[0]
   }
 
}

module.exports = BookingReview