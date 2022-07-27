const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")


class Booking {
  //insert a new record into the database
  static async createBooking({ start_date, user, donationId }) {
    
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
      SELECT d.id AS "donation_id",
            d.user_email AS "donaterEmail",
            b.user_id AS "userId",
            d.name, 
            d.category,
            d.quantity,
            d.created_at AS "createdAt",
            d.image_url AS "imageUrl",
            d.donation_desc,
            d.location,
            d.user_id AS "donaterId",
            u.email AS "userEmail"
      FROM booking AS b
        LEFT JOIN users AS u ON u.id = b.user_id
        LEFT JOIN donation AS d ON d.id = b.donation_id
      WHERE u.email = $1
      ORDER BY d.created_at DESC
      `,[user.email]
  )
  return results.rows
  
}

}

module.exports = Booking