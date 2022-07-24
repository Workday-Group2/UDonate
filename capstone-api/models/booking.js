const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Booking {
  static async createBooking({ start_date, user, donationId }) {
    //insert a new record into the database
    const results = await db.query(
      `
        INSERT INTO booking (start_date, user_id, donation_id)
        VALUES ($1, (SELECT id FROM users WHERE email = $2), $3)
        RETURNING user_id, donation_id, created_at;
      `,
      [start_date, user.email, donationId]
    )

    return results.rows[0]
  }

  static async listUniqueDonation({donationId}) {
    const results = await db.query(
      `
      SELECT * FROM booking 
      WHERE donation_id = $1 
      `,
      [donationId]
    )
    return results.rows[0]
  }

}

module.exports = Booking