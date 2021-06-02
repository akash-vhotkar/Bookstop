const express = require('express');
const router = express.Router();
const postcontroller  =  require('../controller/Posts');

router.post("/createpost",  postcontroller().Createpost);



module.exports = router;