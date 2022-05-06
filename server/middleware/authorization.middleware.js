require('dotenv').config()
const jwt = require("jsonwebtoken")

module.exports.isAuthorized = (req, res, next) => {
    const authToken = req.headers['authorization'];

    jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2m' }, (err, decoded) => {
        console.log(err.message)
    })
}