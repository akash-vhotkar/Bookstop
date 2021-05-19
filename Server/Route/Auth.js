const express = require('express');
const router = express.Router();
router.post('/login', (req,res)=>{
    res.send("thise is user if the page")
})
router.post('register', (req,res)=>{
    res.send("thise is register page")
})

module.exports = router;