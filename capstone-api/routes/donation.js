const express = require("express");
const router = express.Router();
const Donation = require("../models/donation")
const security = require("../middleware/security")
const Rating = require("../models/rating")

//router to create a donation
router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        console.log(user)
        const post = await Donation.createDonation({ user, post: req.body})
        return res.status(201).json({post})
    } catch(err) {
        next(err)
    }
})

//router to list a donation by it's ID
router.get("/id/:donationId", security.requireAuthenticatedUser, async(req, res, next) => {
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

router.post("/id/:donationId/rating", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {donationId} = req.params
        const {user} = res.locals
        const rating = await Rating.createRatingForDonation({rating: req.body.rating, user, donationId})
        return res.status(201).json({ rating })
    } catch(err) {
        next(err)
    }
})

module.exports = router