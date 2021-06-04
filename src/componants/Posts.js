import 'bootstrap/dist/css/bootstrap.min.css';
import './style/postsstyle.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getposts } from '../actions/index'
import Post from './post';
import { FaThumbsUp, FaCommentDots, FaShare, FaPaperPlane } from 'react-icons/fa'


const Posts = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const authdata = useSelector(state => state.AUTH.authdata);
    const posts = useSelector(state => state.POSTS);
    console.log("posta of the page ", posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getposts())
    }, [])

    return (
        <div className="container posts">
            <div className="row">
                <div className="col-md-2 m-2">
                    <h4>All Filter </h4>
                    <a href="">clear all filters</a>

                    <div className="allfileter mt-4">
                        <form>
                            <div className="form-group w-100 ">
                                <label htmlFor="" className="w-100">Enter  the book name</label>
                                <input type="text" className="w-100 m-2 form-control" placeholder="Enter the book name" />
                                <input type="submit" value="Serach" className="btn btn-primary w-100 m-2" />
                            </div>
                        </form>
                    </div>
                    <div className="price_range mt-4">
                        <p>serach by price</p>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="" >300-400 RS</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">400-900 RS</label>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">1000-1400 RS</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">1300-5400 RS</label>
                        </div>


                    </div>
                    <div className="searchbystars mt-4">
                        <p>Search by stars</p>
                        <div></div>

                    </div>

                </div>
                <div className="col-md-8 ">
                    <div className="temp">
                        <h1>Welcome in bookstop</h1>
                        {posts.map((post) => {
                            return (
                                <div key={post._id} className="mt-2">
                                    <div className="card" style={{ width: "80%" }}>
                                        <div className="creator"> 
                                            <div> <img src="df" alt=" here is the image of the post creator "  /> <p>name of the creator </p></div>
                                          
                                            <div className="">Follow+</div>
                                        </div>
                                        <hr />
                                        <div className="message"> <p>{post.message}</p></div>
                                        <img className="card-img-top" src={post.selectedimage[0]} alt="Card image cap" />
                                        <div className="card-body">
                                            <p>the bookname is {post.bookname}</p>
                                            <h1>{post.message}</h1>
                                            <h1>{post.amount}</h1>

                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                        <hr />
                                        <div className="d-flex icons"> 
                                            <div>  <FaThumbsUp /> like  </div>
                                            <div><FaCommentDots></FaCommentDots> comments</div>
                                            <div> <FaShare></FaShare> share</div>
                                            <div> <FaPaperPlane></FaPaperPlane> send </div>
                                        </div>

                                    </div>






                                </div>
                            )


                        })}
                    </div>


                </div>
                <div className="col-md-1 userdetails">
                    {authdata ? (<div>
                        <div className="profileimage">
                        {user?.result ? <img src={user.result.imageUrl[0]} alt="" />  :<img className="dropbtn" src="https://www.w3schools.com/howto/img_avatar.png" alt="" /> }
                    
                        </div>
                        <div className="w-100  mt-5">
                            <p >Hello {authdata.result.name} </p>
                            <p>connections</p>
                            <p>selled books</p>
                            <p>sell book </p>
                        </div>
                    </div>) : null}


                </div>
            </div>
        </div>
    )

}
export default Posts;