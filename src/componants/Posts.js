import './style/postsstyle.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getposts } from '../actions/index'
import Post from './post'
const Posts = () => {

    const authdata = useSelector(state => state.AUTH.authdata);
    const posts = useSelector(state => state.POSTS);
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
                    {posts.map((post) => {
                        <div key={post._id}>
                          
                           <Post post={post} name={"akash vhotkar"}></Post>
                        </div>
                    })}

                </div>
                <div className="col-md-1 userdetails">
                    {authdata ? (<div>
                        <div className="profileimage">
                            <img src="" alt="" />

                        </div>
                        <div className="w-100 ">
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