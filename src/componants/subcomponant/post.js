import React from 'react';
import { FaThumbsUp, FaCommentDots, FaShare, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../style/postsstyle.css'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {likepost, dislike} from  '../../actions/index'
const Post = ({ post }) => {
    const  history = useHistory();
    const authdata = useSelector(state => state.AUTH.authdata);
    const dispatch = useDispatch();
    const [likestate, setlikestate] = useState([]);

    function handellike(e){
        const postid =  e.target.dataset.postid;
        const likes = e.target.dataset.likes;
        

        if(authdata){
            if(likestate.includes(postid) === false){
                setlikestate(prev=> [...prev, postid]);  
                dispatch(likepost(authdata.result.name, postid, likes ));

                
            }
            else{
                const dislikearray =  likestate.filter(id=> id!= postid);
                setlikestate(dislikearray);
                
            dispatch(dislike(authdata.result.name, postid, likes))

            }
        

        }
        else{
            history.push("/login");
            toast("please login ");
        }
        
        
    }
    function handelfollow(e){

    }








    return (
        <div className="POST">
            <div key={post._id} className="mt-2">
                <div className="card" style={{ width: "80%" }}>
                    <div className="creator">
                        <div className="maindiv">
                            <div className="data"><img src={post.userimage[0]} alt="userimage" />
                                <h5>{post.username} </h5></div>

                        </div>
                        <div className="text">Follow+</div>
                    </div>

                    <div className="message">
                        <p>Book name :- {post.bookname}</p>
                        <h6> Book selling amount :- {post.amount}</h6>
                        <h6>{post.message}</h6>


                    </div>
                    <img className="card-img-top" src={post.selectedimage[0]} alt="Card image cap" />
                    <hr />
                    <div className="d-flex icons">
                        <div data-postid={post._id} data-likes = {post.likes} onClick={(e)=> handellike(e)}>  <FaThumbsUp /> like {post.likes} </div>
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