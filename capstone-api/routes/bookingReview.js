const express = require("express");
const router = express.Router();
const BookingReview = require("../models/bookingReview")
const security = require("../middleware/security")


router.post("/:donationId/bookingReview", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {donationId} = req.params
        // console.log('donation: ', donationId);
        const {user} = res.locals
        // console.log('user: ', user);
        // console.log('req.body: ', req.body);
        const {comment} = req.body
        // console.log('comment: ', comment);
        const newBookingReview = await BookingReview.createBookingReview({ comment, user, donationId })
        
        return res.status(201).json({ newBookingReview })
    } catch(err) {
        next(err)
    }
})





module.exports = router