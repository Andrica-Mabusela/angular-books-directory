const Joi = require('joi')
const sequelizeConnection = require('../config/db.config')
const User = require('../models/user.model')

module.exports.registerValidation = async (req, res, next) => {
        const { username, email, password } = req.body

        const schema = Joi.object({
            username: Joi.string().min(2).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        })

        const { error, value } = schema.validate({username, email, password})

        req.authErrMessage = error == undefined ? undefined : error.details[0].message
        req.authenticatedUser = value

        console.log('req error message: ', req.authErrMessage)
        next()

}


// LOGIN VALIDATION MIDDLEWARE
module.exports.loginValidation = (req, res, next) => {

    const { email, password } = req.body 

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    })

    const { error, value } = schema.validate({ email, password })
    
    req.authErrMessage = error == undefined ? undefined : error.details[0].message
    req.authenticatedUser = value
    console.log(req.authErrMessage)
    next()

}