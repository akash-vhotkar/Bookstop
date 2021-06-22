const express = require('express');
const router = express.Router();
const postcontroller  =  require('../controller/Posts');

router.post("/createpost",  postcontroller().Createpost);
router.post("/likepost", postcontroller().Likepost);
router.post('/dislikepost', postcontroller().Dislike)

module.exports = router;