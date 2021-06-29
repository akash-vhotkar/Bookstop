require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app =  express();
const jwt =  require('jsonwebtoken');
const postsdb = require('./model/posts');
const postpubliccontroller = require('./controller/publicapi');
mongoose.connect("mongodb://localhost:27017/bookstop", { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: true}).then(() => {
    console.log("the database is connected successfully...");
}).catch(err => {
    console.log(err);
})



app.set()
app.use(express.json({limit:"50mb"}))

app.use(cors({
    origin: "http://localhost:3000"
}));
const jwtauthorization= (req,res , next)=>{
    const authheader = req.headers.authorization;
    if( authheader){
        const token = authheader.split(' ')[1];
        console.log("the authheader is fired and its story is  ", token);
        jwt.verify(token, 'secret', (err, user)=>{
            if(err) res.status(401).json({err: 1, message:"please login"});
            req.user = user;
        
            next();
        })
    }
    else{
        res.status(401).json({err: 1, message:"please login "})
    }
    
}


app.get("/getposts",  async (req,res)=>{
    try{
        const posts = await postsdb.find();
        res.status(200).json({err: 0 , message:"Posts are fetch", data :posts});

    }
    catch(err){
        if(err) res.status(400).json({err: 1, message:"Internal server error"})
    }
    
})
app.use('/posts',jwtauthorization ,require('./Route/Posts'))
app.use('/auth', require('./Route/Auth'))
app.use('/user', require('./Route/User'))


const port = process.env.PORT;

app.listen(port , (err)=>{
    if(err) console.log(err);
    else{
        console.log(`server is running on port ${port}`);
    }
})