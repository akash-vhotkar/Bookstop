import React from 'react';
import { FaThumbsUp, FaCommentDots, FaShare, FaPaperPlane } from 'react-icons/fa'
import { useState} from 'react'
const Post = ({post}) => {
    const [ bookname , setsearchbookname] = useState("");
    const [ searchamount , setsearchamount] = useState({minamount : 0, maxamount: 0});
    return (
        <div className="POST">
               <div key={post._id} className="mt-2">
               <div className="card" style={{ width: "80%" }}>
                   <div className="creator"> 
                   <div className="maindiv">
                       <div className="data"> <img src="https://www.w3schools.com/howto/img_avatar.png" alt=" here is the image of the post creator "  /> <h5>Akash vhotkar </h5></div>
                       <div className="">Follow+</div>
                       </div>
                   </div>
                 
                   <div className="message"> 
                   <p>Book name :- {post.bookname}</p>
                       <h6> Book selling amount :- {post.amount}</h6>
                       <h6>{post.message}</h6>
                       

                   </div>
                   <img className="card-img-top" src={post.selectedimage[0]} alt="Card image cap" />
                   <hr />
                   <div className="d-flex icons"> 
                       <div>  <FaThumbsUp /> like  </div>
                       <div><FaCommentDots></FaCommentDots> comments</div>
                       <div> <FaShare></FaShare> share</div>
                       <div> <FaPaperPlane></FaPaperPlane> send </div>
                   </div>

               </div>

</div>




           </div>
        
    )
}
export default Post;