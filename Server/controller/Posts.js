const postsdb = require('../model/posts');
const  postcontroller = ()=>{
    return {
        async Createpost(req,res){
            let  postdata =  req.body;
           console.log("before ", postdata);
            if(Array.isArray(postdata.userimage)== false){
                postdata = {...postdata, userimage: [postdata.userimage]}
            }
            try{
                console.log("after  ", postdata);
                
                const newpost = await postsdb.create(postdata);
                if(newpost){
                    const data =  await postsdb.find();
                    res.status(200).json({err: 0, message:"post created sucessfully", data: data});
                }
                else{
                    res.status(200).json({err:1 , message:"post not created"})
                }

            }
            catch(err){
                if(err) res.status(400).json({err:1 , message:"Internal server error"})
            }
        },
        async Likepost(req,res){
            const  username =  req.body.username;
            const postid = req.body.postid;
            const likes =   req.body.likes+1;
            try{

                const temp = await postsdb.findByIdAndUpdate({_id: postid, username :req.user.username},{likes: likes},{});
                if(temp!= null ){
                    res.status(200).json({err: 0, message:"Like successfull"})
                }
                else{
                   
                    res.status(500).json({err: 1, message:"Internal server error"});
                }
                
            }catch(err){
                console.log(err);
                if(err) res.status(500).json({err: 1, message:"Internal server error"})
                
            }
            
        },
        async Dislike(req,res){
            const username = req.user.username;
            const postid =  req.body.postid;
            const likes = req.body.likes-1;
            try{

                const temp = await postsdb.findByIdAndUpdate({_id: postid, username: username}, {likes: likes}, {});
                if(temp!= null){
                    return res.status(200).json({err: 0 ,message:"Dislike done"})
                }
                else{
                    return res.status(500).json({err: 1, message:"Internal server error"})
                }

            }
            catch(err){
                return res.status(500).json({err: 1, message:"Internal server error"})
            }
        }
    }
}
module.exports =  postcontroller;