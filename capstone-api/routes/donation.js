const express = require("express");
const router = express.Router();
const Donation = require("../models/donation")
const security = require("../middleware/security")
const Rating = require("../models/rating")
const Booking = require("../models/booking")

//router to create a donation
router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        const post = await Donation.createDonation({ user, post: req.body})
        return res.status(201).json({post})
    } catch(err) {
        next(err)
    }
})

//router to list a donation by it's ID
router.get("/:donationId", security.requireAuthenticatedUser, async(req, res, next) => {
    try{
        const {donationId} = req.params
        const donation = await Donation.fetchDonationById(donationId)
        return res.status(200).json({donation})
    }catch(err){
        next(err)
    }
})

//router to list all of the donations
router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {user} = res.locals;
        const donations = await Donation.listDonationForUser({user})
        return res.status(200).json({donations})
    } catch(err) {
        next(err)
    }
})


router.post("/:donationId/rating", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {donationId} = req.params
        const {user} = res.locals
        const rating = await Rating.createRatingForDonation({ rating: req.body.rating, user, donationId })
        return res.status(201).json({ rating })
    } catch(err) {
        next(err)
    }
})

router.post("/:donationId/newBooking", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {donationId} = req.params
        const {user} = res.locals
        const newBooking = await Booking.createBooking({ newBooking: req.body.newBooking, user, donationId })
        const updateDonation = await Booking.setBookedDonation( donationId )
        return res.status(201).json({ newBooking, updateDonation })
    } catch(err) {
        next(err)
    }
})

module.exports = router