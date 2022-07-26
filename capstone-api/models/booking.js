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


  static async setBookedDonationInDonation(donationId) {

    const results = await db.query(
    `
    UPDATE donation
    SET bookee_user_id = user_id
    WHERE id = $1
    `,
    [donationId]
    )

    return results.rows[0]
}

static async setBookedDonationInBooking(donationId) {

  const results = await db.query(
  `
  UPDATE booking
  SET bookee_user_id = user_id
  WHERE id = $1
  `,
  [donationId]
  )

  return results.rows[0]
}

static async listBookingForUser({user}) {
 
  const results = await db.query(
      `
      SELECT b.id, d.name, 
      u.email AS "userEmail"
      FROM booking AS b
        LEFT JOIN users AS u ON u.id = b.user_id
        LEFT JOIN donation AS d ON d.user_id = b.user_id
      WHERE u.email = $1
      `,[user.email]
  )
  return results.rows
  
}

}

module.exports = Booking