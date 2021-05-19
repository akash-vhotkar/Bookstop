const mongoose = require('mongoose');
module.exports  = mongoose.model("User",{
    username:{
        type:String,
        required: false
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})