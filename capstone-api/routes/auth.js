const express = require("express")
const User = require("../models/user")
const router = express.Router()
const {createUserJwt, generatePasswordResetToken} = require("../utils/tokens")
const security = require("../middleware/security")
const {emailService} = require("../services")

router.post("/login", async (req, res, next) => {
    try {
        const user = await User.login(req.body)
        const token = createUserJwt(user)
        return res.status(200).json({ user, token })
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        console.log("hi")
        const user = await User.register(req.body)
        const token = createUserJwt(user)
        return res.status(201).json({user, token})
    } catch(err) {
        next(err)
    }
})

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const {email} = res.locals.user
        const user = await User.fetchUserByEmail(email)
        const publicUser = {id: user.id, email: user.email, first_name: user.first_name, last_name: user.last_name}
        return res.status(200).json({user: publicUser})
    }catch(error){
        next(error)
    }
})

router.post("/recover", async (req,res,next) =>{
    try{
        const {email} = req.body
        const token = generatePasswordResetToken()
        const user = awaitUser.savePasswordResetToken(email, token)
        if (user){
            await emailService.sendPasswordResetEmail(user, token)
        }
        return res.status(200).json({ message: `If your account exsits in our system you should recieve an email shortly.`})
    } catch(error){
        next(error)
    }
}

)

router.post("/password-reset", async (req,res,next) =>{
    try{
        const {token} = req.query
        const {newPassword} = req.body
        
        const user = awaitUser.savePasswordResetToken(token, newPassword)
        if (user){
            await emailService.sendPasswordResetConfirmationEmail(user)
        }
        return res.status(200).json({ message: `password successfully reset!`})
    } catch(error){
        next(error)
    }
}

)


module.exports = router