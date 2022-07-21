const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Booking {
    static async createBooking ({newBooking, donation, user}) {
        const requiredFields = ["startDate"]
        requiredFields.forEach((field) => {
            if (!newBooking?.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing required field - ${field} - in request body.`)
      }
    })

    const results = await db.query(
        `
          INSERT INTO booking (
            start_date, 
            donation_id, 
            user_id
          )
          VALUES (
            ($1)::date, 
            $2,  
            (SELECT id FROM users WHERE username = $7)
          )
          RETURNING id,
                    start_date AS "startDate",
                    donation_id AS "donationId",
                    user_id AS "userId",
                    (
                      SELECT username 
                      FROM users
                      WHERE id = user_id
                    ) AS "username",                  
                    (
                      SELECT users.username
                      FROM users
                      WHERE users.id = (
                        SELECT donation.user_id
                        FROM donation
                        WHERE donation.id = donation_id
                      )
                    ) AS "donatorUsername",                  
                    created_at AS "createdAt";
        `,
        [
          newBooking.startDate,
          donation.id,
          user.username,
        ]
      )
  
      return results.rows[0]

    }
}

module.exports = Booking