const postdb = require('../model/posts');
const serchposts = ()=>{
    return {
        async Seachbyamount(req,res){
            try{
                const allposts = await  postdb.find();
                const posts = allposts.filter(post=> post.amount>= req.body.minamount && post.amount <= req.body.maxamount)
                if(posts) {
                    console.log("search amount ", req.body.minamount, " and max amount is ",req.body.maxamount);
                    res.status(200).json({err: 0, message:"search successfully",  data: posts})
                }
                else {
                    res.status(400).json({err: 1, message:"No post for thise"})
                }
            }  
            catch(err){
                console.log(err);
                if(err) res.status(400).json({err: 1, message:"Internal server error"});
            }

        },
        async Searchbybookname(req,res){
            console.log("search by book name is made ", req.body.bookname);
            
            try{
                console.log("puclic api known but ");
                const posts  = await postdb.find({bookname: req.body.bookname });
                console.log("posts are ",posts);
                if(posts){
                    res.status(200).json({err: 0, message:"search successfull", data :posts});    
                }
                else{
                    res.status(400).json({err: 1, message:"Internal server error"})
                }

            }catch(err){
                console.log(err);
                if(err) res.status(400).json({err:1, message:"Internal server error"})
            }
        },
        async  searchbynameandamount(req,res){
            try{
                const allposts  = await postdb.find({bookname: req.body.bookname}) ;
                const posts =  allposts.filter(post=> post.amount >= req.body.minamount && post.amount<= req.body.maxamount);
                if(posts){
                    console.log("search by amount and bookname", req.body.name," amount s", req.body.minamount," and max amount ");
                    res.status(200).json({err: 0, message:"search successfuly", data : posts});

                }
                else{
                     res.statuss(400).json({err: 1 ,message:"Internal server error"});
                }
            }
            catch(err){
                console.log(err);
                if(err)  res.status(400).json({err: 1, message:"Internal server error"})
            }
        }
    }
}

module.exports = serchposts;