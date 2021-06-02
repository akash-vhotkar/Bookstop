const postsdb = require('../model/posts');
const  postcontroller = ()=>{
    return {
        async Createpost(req,res){

            const postdata =  req.body;
            console.log(postdata);
            try{
                const newpost = await postsdb.create(postdata);
                if(newpost){
                    console.log("create post is fired in controller ",newpost);
                    res.status(200).json({err: 0, message:"post created sucessfully"});
                }
                else{
                    res.status(200).json({err:1 , message:"post not created"})
                }

            }
            catch(err){
                if(err) res.status(400).json({err:1 , message:"Internal server error"})
            }
        }

    }
}
module.exports =  postcontroller;