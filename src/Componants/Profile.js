import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import {getbids,  confirmbid} from '../Actions/index';
import Hoc from '../Hoc/Auth'

const Profile = (props)=>{
  const dispatch = useDispatch();
  const bids  = useSelector(state=> state.BIDS);
  const [biddata, setbiddata ] = useState([]);
  const user = props.user;
  
  function handelconfirmbid(e){
    if(user !== null){

    
    const selectedbid = {
       Bidamount :e.target.dataset.bidamount,
     Biddername : e.target.dataset.biddername,
     postid :e.target.dataset.postid
    }
    dispatch(confirmbid(selectedbid));
  }
  else{
    toast("please login")
  }
  }


  function handelcheck(e){
    toast("Bid  is alredy confirm")

  }

  useEffect(()=>{
    dispatch(getbids());

  },[])
  useEffect(()=>{
    setbiddata(bids)
  },[bids])
  
    
    return (
        <div className="Profile">

            <div className="container">
               {user ?<div><h1>Hi , {user.result.name}</h1></div>: <h1>Hi</h1> } 


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
       <td  >{ bid.status ?<button className="btn btn-primary"  onClick={(e)=> handelcheck(e)}>Confirmed</button>:<button className="btn btn-primary" data-postid={bid.postid} data-Biddername={bid.Biddername}  data-Bidamount={bid.Bidamount} onClick={(e)=> handelconfirmbid(e)} >confirm</button> } </td>
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
const EnhanceProfile = Hoc(Profile, true);
export default EnhanceProfile;