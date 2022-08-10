const express = require("express");
const router = express.Router();
const Rating = require("../models/rating")
const security = require("../middleware/security")



router.post("/:donationId", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {donationId} = req.params
        const {user} = res.locals
        const rating = await Rating.createRatingForDonation({ rating: req.body.rating, user, donationId })
        return res.status(201).json({ rating })
    } catch(err) {
        next(err)
    }
})

router.get("/user/:donaterId", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {donaterId} = req.params //donater
        
        const donaterRating = await Rating.fetchDonaterRating({donaterId})
        return res.status(200).json({donaterRating})

    } catch(err) {
        next(err)
    }
})

module.exports = router