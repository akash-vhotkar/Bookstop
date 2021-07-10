import './style/createpostform.css'
import  { useDispatch} from 'react-redux'
import { useState  } from "react";
import {useHistory} from 'react-router-dom'
import FileBase64 from 'react-file-base64';
import { createpost} from '../Actions/index'
import Hoc from '../Hoc/Auth'

const Createpost = (props)=>{
    
    const history = useHistory();
    const [post ,setpost] = useState({message: "", bookname:"", selectedimage:[], amount: 0, publishyear: "", sem : 1, location :""});
    const user = props.user;


    const dispatch = useDispatch();
    function handelcreatepost(e){
        e.preventDefault();
        dispatch(createpost(post, history, user ));


    }
  
    
    return(
        <div className="Cretepostform">
            <div className="handelform">
                <h1>Sell your book</h1>
            <form onSubmit={handelcreatepost} >
                <div className="form-group p-2">
                    <label className="w-100">Enter the bookname</label>
                    <input className="form-control w-100" value={post.bookname} onChange={(e)=>setpost({...post, bookname: e.target.value})} type="textarea"  placeholder="Enter the message of the post" />
                </div>
                <div className=" form-group p-2">
                    <label  className="w-100">
                        Enter book sell amount 
                    </label>
                    <input className="form-control w-100"  value={post.amount} onChange={(e)=> setpost({...post, amount: e.target.value})} type="text" placeholder="Enter the sell amount" />
                </div>

                <div className=" form-group p-2">
                    <label  className="w-100">
                        Enter publise year
                    </label>
                    <input className="form-control w-100"  value={post.publishyear} onChange={(e)=> setpost({...post, publishyear: e.target.value})} type="text" placeholder="Enter the publish year" />
                </div>
                <div className=" form-group p-2">
                    <label  className="w-100">
                    Enter the sem 
                    </label>
                    <input className="form-control w-100"  value={post.sem} onChange={(e)=> setpost({...post, sem: e.target.value})} type="text" placeholder="Enter the sem" />
                </div>
                <div className=" form-group p-2">
                    <label  className="w-100">
                    Enter the Location name 
                    </label>
                    <input className="form-control w-100"  value={post.location} onChange={(e)=> setpost({...post, location: e.target.value})} type="text" placeholder="Enter the sem" />
                </div>
      
      
                
                
                <div className="form-group p-2">
                    <label >Select the image of the book</label>
                    <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setpost({ ...post, selectedimage: base64 })} />

                </div>
                <div className=" form-group p-2">
                    <label  className="w-100">
                        Enter  message
                    </label>
                    <textarea className="form-control w-100" name="" id="" cols="30" rows="5" value={post.message} onChange={(e)=> setpost({...post, message: e.target.value})} type="text" placeholder="Enter the book name"></textarea>
                    
                </div>
                
                <div className="form-group p-2">
                    <input type="submit" value="Submit" className="w-100 btn btn-primary" />
                </div>
            </form>
            </div>
        </div>
    )
}
const EnhancePost = Hoc( Createpost, true);
export default EnhancePost;