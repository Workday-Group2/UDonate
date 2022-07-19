const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Booking {
    static async createBooking ({newBooking, donation, user}) {
        const requiredFields = []
    }
}

module.exports = Booking