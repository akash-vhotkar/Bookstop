import { data } from 'jquery';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import {getbids, loginagain} from '../actions/index';

const Profile = ()=>{
    const authdata = useSelector(state => state.AUTH.authdata);
    const history = useHistory();
    const dispatch = useDispatch();
  const bids  = useSelector(state=> state.BIDS);
  const [biddata, setbiddata ] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  
  useEffect(()=>{
    console.log("authdata ");
    dispatch(getbids());
    if(authdata === null && user !== null){
      dispatch(loginagain(JSON.parse(localStorage.getItem('profile')), history) )
    }
    else if(authdata== null && user == null){
      toast("please login");
      history.push("/login");
    }
  },[])

 
  useEffect(()=>{
    setbiddata(bids)
  },[bids])
  
    
    return (
        <div className="Profile">

            <div className="container">
               {authdata ?<div><h1>Hi , {authdata.result.name}</h1></div>: <h1>Hi</h1> } 


{biddata.map(post=>(
  <div key={post._id}>
    <h1>{post.bookname}</h1>
    <div>

    </div>


    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Postid </th>
      <th scope="col">username</th>
      <th scope="col">Bidamount </th>
      <th scope="col"> confirm </th>
    </tr>
  </thead>
  <tbody>
    {post.bids.map(bid=>(
       <tr>
       <th scope="row">{bid.postid}</th>
       <td>{bid.Biddername}</td>
       <td>{bid.Bidamount}</td>
       <td>{ bid.status ?<button className="btn btn-primary" >Confirmed</button>:<button className="btn btn-primary" data-postid ={bid.postid} data-Biddername={post.Biddername} data-Bidamount = {post.Bidamount}>confirm</button> } </td>
     </tr>
    

    ))}
   
  </tbody>
</table>



  </div>
))}







                
      
            </div>
        </div>
    )
}
export default Profile;