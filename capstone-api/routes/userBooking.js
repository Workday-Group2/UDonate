const express = require("express");
const router = express.Router();
const Donation = require("../models/donation")
const security = require("../middleware/security")

router.get("/", async (req, res, next) => {
    try {
        const {user} = res.locals;
        const userBooking = await Donation.listBookingForUser({user})
        return res.status(200).json({userBooking})
    } catch(err) {
        next(err)
    }
})

module.exports = router