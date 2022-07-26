const express = require("express");
const router = express.Router();
const Booking = require("../models/booking")
const security = require("../middleware/security")

router.get("/userHistory",security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {user} = res.locals; 
        console.log(user)
        const userBooking = await Booking.listBookingForUser({user})
        console.log('userBooking: ', userBooking);
        return res.status(200).json({userBooking})
    } catch(err) {
        next(err)
    }
})

module.exports = router