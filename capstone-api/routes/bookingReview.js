const express = require("express");
const router = express.Router();
const BookingReview = require("../models/bookingReview")
const security = require("../middleware/security")


router.post("/:bookingId/bookingReview", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {bookingId} = req.params
        console.log('bookingId: ', bookingId);
        const {user} = res.locals
        console.log('req.body.newBookingReview: ', req.body.comment);
        const newBookingReview = await BookingReview.createBookingReview({ newBookingReview: req.body.comment, user, bookingId })
        return res.status(201).json({ newBookingReview })
    } catch(err) {
        next(err)
    }
})





module.exports = router