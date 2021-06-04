const mongoose = require('mongoose');
module.exports  = mongoose.model("User",{
    username:{
        type:String,
        required: false
    },
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
    }
})