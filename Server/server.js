require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app =  express();
const jwt =  require('jsonwebtoken');
mongoose.connect("mongodb+srv://akash:akash1234@cluster0.4ayge.mongodb.net/bookmytaxi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("the database is connected successfully...");
}).catch(err => {
    console.log(err);
})

app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000"
}));
const jwtauthorization= (req,res , next)=>{
    const authheader = req.headers.authorization;
    if( authheader){
        const token = authheader.split(' ')[1];
        jwt.verify(token, 'secret', (err, user)=>{
            if(err) console.log(err);
            req.user = user;
            next();
        })
    }
    else{
        res.status(401).json({err: 1, message:"Authentication require"})
    }
    
}



app.use('/posts', require('./Route/Posts'))
app.use('/auth', require('./Route/Auth'))
app.use('/user', require('./Route/User'))


const port = process.env.PORT;

app.listen(port , (err)=>{
    if(err) console.log(err);
    else{
        console.log("server is running on port 7600");
    }
})