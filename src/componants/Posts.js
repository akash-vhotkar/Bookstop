import 'bootstrap/dist/css/bootstrap.min.css';
import './style/postsstyle.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getposts, clearfilters, searchbyamount, searchbynameandamount } from '../actions/index'
import { searchbookbyname} from '../actions/index'
import { toast } from 'react-toastify';
import Post from './subcomponant/post';
import Filters from './Filters';
import Allfilters from './Allfiltersblock';
import Homeprofile from './Homeuserprofile';
const Posts = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const authdata = useSelector(state => state.AUTH.authdata);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.POSTS);
   
    useEffect(() => {
        dispatch(getposts())
        if(user != null){
            dispatch({type:"LOGINAGAIN", data: authdata})
        }
   
    }, [])

    return (
        <div className="container posts">
            <div className="row">
                <Allfilters></Allfilters>
                
                 </div>
            <div className="row">
                <div className="col-md-2 m-2">
                    <Filters></Filters>
                </div>
                <div className="col-md-7 ">
                    <div className="temp">
                        {posts.copydata.map((post)=>(
                            
                            <Post post={post}></Post>
                        ))}
                    </div>


                </div>
                <div className="col-md-2 userdetails">
                    <Homeprofile authdata={authdata} user={user}/>

                </div>
            </div>
        </div>
    )

}


export default Posts;