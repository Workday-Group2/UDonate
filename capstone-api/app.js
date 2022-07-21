const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { NotFoundError, BadRequestError} = require("./utils/errors")
const authRoutes = require("./routes/auth")
const security = require("./middleware/security")
const donationRoutes = require("./routes/donation")
const bookingRoutes = require("./routes/booking")

const app = express()

app.use(cors())

app.use(express.json())

app.use(morgan("tiny"))

app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)
app.use("/donation", donationRoutes)
app.use("/booking", bookingRoutes)

// app.get("/", async(req, res, next) => {
//     res.status(200).json({ ping: "pong"})
// })

app.use((req, res, next) => {
    return next(new NotFoundError())
})


app.use((req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: { message, status},
    })
})

module.exports = app