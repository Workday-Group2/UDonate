const express = require("express");
const router = express.Router();
const security = require("../middleware/security")
const Booking = require("../models/booking")
const permissions = require("../middleware/permissions")

router.post("/:donationId/newBooking", security.requireAuthenticatedUser, permissions.authedUserIsNotDonationOwner, async (req, res, next) => {
    try {
        const {donationId} = req.params
        const {user} = res.locals
        const newBooking = await Booking.createBooking({ newBooking: req.body.newBooking, user, donationId })
        const updateDonationInDonation = await Booking.setBookedDonationInDonation( donationId )
        const updateDonationInBooking = await Booking.setBookedDonationInBooking( donationId )
        return res.status(201).json({ newBooking, updateDonationInDonation, updateDonationInBooking })
    } catch(err) {
        next(err)
    }
})

module.exports = router