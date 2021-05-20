const express = require('express');
const router = express.Router();
const Authcontroller = require('../controller/Auth');
router.post('/login', Authcontroller().Login)
router.post('/register',Authcontroller().Register)

module.exports = router;