const mongoose = require('mongoose');
module.exports  = mongoose.model("User",{
    
    email:{
        type:String,
        required: false
    },
    password:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    imageUrl: {
        type:Array,
        required: false
    },
    followers:{
        type:Number,
        required: false,
        default: 0
    },
    selledbooks:{
        type:Number,
        default: 0
    },
    FollowersArray:{
        type:Array,
        required: true
    }
})