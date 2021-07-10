import Hoc from '../Hoc/Auth';
import React, {lazy, Suspense} from 'react';
import Spinner from '../Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/postsstyle.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getposts} from '../Actions/index'
import Filters from './Filters';
import Allfilters from './Allfiltersblock';
import Homeprofile from './Homeuserprofile';
const Post = lazy(()=>  import('./subcomponant/post'));


const Posts = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.POSTS);
    
    useEffect(()=>{
        dispatch(getposts())
        

    },[])
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


                 <Suspense fallback={<Spinner></Spinner>}>   
                    <div className="temp">
                        {posts.copydata.map((post)=>(
                            
                            <Post post={post}></Post>
                        ))}
                    </div>
                    </Suspense>


                </div>
                <div className="col-md-2 userdetails">
                    <Homeprofile />

                </div>
            </div>
        </div>
    )

}
const EnhancePosts = Hoc(Posts, false);
export default  EnhancePosts;