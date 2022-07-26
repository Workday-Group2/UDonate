const express = require("express");
const router = express.Router();
const BookingReview = require("../models/bookingReview")
const security = require("../middleware/security")


router.post("/:donationId/bookingReview", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {bookingId} = req.params
        const {user} = res.locals
        const newBookingReview = await BookingReview.createBookingReview({ newBookingReview: req.body.newBookingReview, user, bookingId })
        return res.status(201).json({ newBookingReview })
    } catch(err) {
        next(err)
    }
})





module.exports = router