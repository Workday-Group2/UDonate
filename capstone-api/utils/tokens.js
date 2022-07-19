const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const { SECRET_KEY } = require("../config")
const tokens = require("../utils/tokens")
const generateToken = (data) => jwt.sign(data, SECRET_KEY, { expiresIn: "24h" })

const createUserJwt = (user) => {
  const payload = {
    email: user.email,
  }

  return generateToken(payload)
}

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    return decoded
  } catch (err) {
    return {}
  }
}


const generateCryptoToken = (numBytes) => crypto.randomBytes(numBytes).toString("hex")

const generatePasswordResetToken = () =>{
  return{
  token: generateCryptoToken(20),
  expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString()
  }
}
module.exports = {
  generateToken,
  validateToken,
  createUserJwt,
  generatePasswordResetToken,
  
}