const mongoose = require('mongoose');
module.exports = mongoose.model("posts", {
    message: {
        type: String,
        required: true
    },
    bookname: {
        type: String,
        required: false
    }
    , selectedimage: {
        type: Array,
        required: false
    }
    , amount: {
        type: String,
        required: true,
        default: true
    }
    , publishyear: {
        type: String,
        required: true
    }
    , sem: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    time: {
        type:Date,
        default: new Date()
    }
})