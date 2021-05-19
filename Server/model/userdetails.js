const mongoose = require('mongoose');
module.exports =  mongoose.model("Userdetails", {
    ratings:{
        type:String,
        required: true
    }

})