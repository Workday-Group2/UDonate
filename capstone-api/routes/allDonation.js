
const express = require("express");
const router = express.Router();
const Donation = require("../models/donation")


router.get("/", async (req, res, next) => {
    try {
        const {user} = res.locals;
        const donations = await Donation.listDonationForAll({user})
        console.log(111,donations)
        return res.status(200).json({donations})
    } catch(err) {
        next(err)
    }
})

module.exports = router