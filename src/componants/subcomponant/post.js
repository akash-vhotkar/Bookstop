import React from 'react';
import { FaThumbsUp, FaCommentDots, FaShare, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../style/postsstyle.css'
import { useHistory } from 'react-router-dom';
import Comments from './Comments';
import { toast } from 'react-toastify';
import { likepost, dislike } from '../../actions/index';
import {Bid} from '../../actions/index'
const Post = ({ post }) => {
    const history = useHistory();
    const authdata = useSelector(state => state.AUTH.authdata);
    const dispatch = useDispatch();
    const [likestate, setlikestate] = useState([]);
    const [isfollow, setfollow] = useState([]);
    const [message, setmessage] = useState("");
    const [bidamount, setbidamount] = useState(0);
    const [isdisplaycomment, setdisplaycomment] = useState(false)
    function handelcommentclick(e) {
        e.preventDefault();
        console.log(e.target);

    }


    function handelbid(e){
        if(authdata){
            const postid = e.target.dataset.postid;
            const bookname = e.target.dataset.bookname;
            const biddername = authdata.result.username;
            dispatch(Bid(postid, bidamount, bookname,biddername));
            setbidamount(0);

        }
        else{
            history.push("/login");
            toast("please login")

        }

        
        
    }







    function handellike(e) {
        const postid = e.target.dataset.postid;
        const likes = e.target.dataset.likes;


        if (authdata) {
            if (likestate.includes(postid) === false) {
                setlikestate(prev => [...prev, postid]);
                dispatch(likepost(authdata.result.name, postid, likes));


            }
            else {
                const dislikearray = likestate.filter(id => id != postid);
                setlikestate(dislikearray);

                dispatch(dislike(authdata.result.name, postid, likes))

            }

        }
        else {
            history.push("/login");
            toast("please login ");
        }


    }
    function handelfollow(e) {
        if (authdata) {


        }
        else {
            history.push("/login");
            toast("please login ");

        }

    }








    return (
        <div className="POST">
            <div key={post._id} className="mt-2">
                <div className="card" style={{ width: "80%" }}>
                    <div className="creator">
                        <div className="maindiv">
                            <div className="data"><img src={post.userimage[0]} alt="userimage" />
                                <h5>{post.name} </h5></div>

                        </div>
                        <div className="text">Follow+</div>
                    </div>

                    <div className="message">
                        <p>Book name :- {post.bookname}</p>
                        <h6> Book selling amount :- {post.amount}</h6>
                        <h6>Description :-  {post.message}</h6>
                        <h6>location :- {post.location}</h6>
                    </div>
                    <img className="card-img-top" src={post.selectedimage[0]} alt="Card image cap" />
                    <hr />
                    <div className="parentele">

                        <div className="d-flex icons">
                            <div data-postid={post._id} data-likes={post.likes} onClick={(e) => handellike(e)}>  <FaThumbsUp /> like {post.likes} </div>
                            <div onClick={(e) => handelcommentclick(e)} data-postid={post._id}><FaCommentDots></FaCommentDots> comments</div>
                            <div>
                                <input type="number" onChange={(e)=> setbidamount(e.target.value)} value={bidamount} name="bidamount" id="" />
                            </div>
                            <div> <button className="btn btn-primary" data-postid= {post._id} data-bookname={post.bookname} onClick={(e)=> handelbid(e)}> Bid</button> </div>
                        </div>
                        <div className={post._id} style={{ display: "none" }}>
                            <div>
                                <h1>the previous comments </h1>
                            </div>
                            <div className="d-flex">

                                <input type="text" onChange={(e) => setmessage(e.target.value)} className=" w-100" name="" id="" placeholder="Enter your message " />
                                <button className="btn btn-primary w-20" type="submit">post</button>

                            </div>
                        </div>
                    </div>
                </div>



            </div>




        </div>

    )
}
export default Post;