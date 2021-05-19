const mongoose= require('mongoose');
const postscontroller =  mongoose.model("posts", {
    username:{
        type:String,
        required: true
    },
    booknames:{
        type:Array,
        required: true
    },
    commnets:{
        type:String,
        required: true
    },
    amount :{
        type:String,
        required: true
    }
})