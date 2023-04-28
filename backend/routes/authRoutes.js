const express = require('express');
const { signup } = require('../controllers/authControllers');
const router = express.Router();


//auth

router.post('/signup', signup);

module.exports = router;