const mongoose = require('mongoose');
module.exports = mongoose.model("posts", {
    username: {
        type:String,
        required: true
    },
    message: {
        type:String,
        required: true

    },
    postimg: {
        type:Array,
        required : false
    },
    comments: {
        type:String,
        required: false
    },
    likes:{
        type:Number,
        required: true,
        default: 0
    },
    bit:{
        type:Number,
        required : true
    }
})