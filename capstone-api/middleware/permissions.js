const Donation = require("../models/donation")
const { BadRequestError } = require("../utils/errors")

const authedUserIsNotDonationOwner = async (req, res, next) => {
    try {
      const { user } = res.locals
      const { donationId } = req.params
      const donation = await Donation.fetchDonationById(donationId)
      if (donation.email === user.email) {
        throw new BadRequestError("User is not allowed to book their own donation.")
      }
  
      res.locals.donation = donation
  
      return next()
    } catch (err) {
      return next(err)
    }
  }

module.exports = {
    authedUserIsNotDonationOwner
  }