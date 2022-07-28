const express = require("express");
const router = express.Router();
const Rating = require("../models/rating")
const security = require("../middleware/security")



router.post("/:user_id", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {user_id} = req.params
        const {user} = res.locals
        const rating = await Rating.createRatingForDonation({ rating: req.body.rating, user, user_id })
        return res.status(201).json({ rating })
    } catch(err) {
        next(err)
    }
})

module.exports = router