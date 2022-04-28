const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/authentication.middleware')
const authController = require('../controllers/auth.controller').authController

// LOGIN POST REQUEST HANDLE
router.post('/login', authMiddleware.loginValidation, authController.login)

// REGISTER POST REQUEST HANDLE
router.post('/register', authMiddleware.registerValidation, authController.register)

module.exports = router