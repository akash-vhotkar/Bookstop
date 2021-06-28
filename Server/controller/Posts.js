const { data } = require('jquery');
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
            const  name =  req.body.name;
            const postid = req.body.postid;
            const likes =   req.body.likes+1;
            try{

                const temp = await postsdb.findByIdAndUpdate({_id: postid, name :req.user.name},{likes: likes},{});
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
            const name = req.user.name;
            const postid =  req.body.postid;
            const likes = req.body.likes-1;
            try{

                const temp = await postsdb.findByIdAndUpdate({_id: postid, name: name}, {likes: likes}, {});
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
        },
        async Getbids(req,res){
            try{
                console.log(req.user.name);
                const bidespost  =  await postsdb.find({name: req.user.name});
                if(bidespost){
                    return res.status(200).json({err: 0 ,message:"Fetch Bids done", data:bidespost});

                }
                else{
                    return res.status(400).json({err: 1, message:"Fail"})
                }
                
            }
            catch(err){
                if(err) console.log(err);
            }
        },
        async Bid(req,res){
            const bidamount = req.body.bidamount;
            const postid = req.body.postid
            const biddername = req.user.name;
            const bookname = req.body.bookname;
            try{
               const bid=  { postid:postid,
                    Bookname:bookname,
                    Biddername:biddername,
                   Bidamount:bidamount
                    }
                const temp =  await postsdb.findOneAndUpdate({_id: postid}, {$push :{bids: bid}},{})
              const data = await postsdb.find({name: biddername});
                if(temp!= null){
                    return res.status(200).json({err: 0, message:"Bid done" , data: data})
                }
                else{
                    return res.status(400).json({err:1, message:"Internals server error"});
                }
                
            }
            catch(err){
                console.log(err);
                if(err){
                    res.status(500).json({err: 0 ,message:"Internal server error"});
                }
            }
        },
        async ConfirmBid(req,res){
            try{

                const bidderdata = await postsdb.findOne({_id: req.body.postid});
                const bids = bidderdata.bids;
            bids.forEach(bid=>{
                    if(bid.postid == req.body.postid){
                        bid.status = true
                    }
                })
                const bids = await postsdb.findOneAndUpdate({_id: req.body.postid},{$set :{bids: bids}},{});
                const postsbd=  await postsdb.find({Biddername: req.body.Biddername});


            }
            catch(err){
                if(err){
                    return res.status(500).json({err:1, message:"Internals server error"})
                }
            }
            
    
        }
    }
}
module.exports =  postcontroller;