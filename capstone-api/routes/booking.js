const express = require("express")
const Booking = require("../models/booking")
const security = require("../middleware/security")
const router = express.Router()


router.post("/donations/:donationId/", security.requireAuthenticatedUser, async (req, res, next) => {
      try {
        // create new booking for donation
        const { user, listing } = res.locals
        const booking = await Booking.createBooking({ user, donation, newBooking: req.body.newBooking })
        return res.status(201).json({ booking })

      } catch (err) {
        next(err)
      }
    }
  )


module.exports = router