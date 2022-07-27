const express = require("express");
const router = express.Router();
const BookingReview = require("../models/bookingReview")
const security = require("../middleware/security")


router.post("/:donationId/bookingReview", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {donationId} = req.params
        const {user} = res.locals
        const {comment} = req.body
        const newBookingReview = await BookingReview.createBookingReview({ comment, user, donationId })
        
        return res.status(201).json({ newBookingReview })
    } catch(err) {
        next(err)
    }
})





module.exports = router