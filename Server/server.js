require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app =  express();

app.use('/posts', require('./Route/Posts'))
app.use('/auth', require('./Route/Auth'))
app.use('/user', require('./Route/User'))


const port = process.env.port ;
app.listen(port , (err)=>{
    if(err) console.log(err);
    else{
        console.log("server is running on port 5000");
    }
})