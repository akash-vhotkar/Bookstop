import './style/createpostform.css'
import { useState } from "react";

const Createpost = ()=>{
    const [post ,setpost] = useState({message: "", bookname:"", selectedimage:""});
    function handelcreatepost(e){
        e.preventDefault();

    }
    return(
        <div className="Cretepostform">
            <div className="handelform">
                <h1>Create your post</h1>
            <form onSubmit={handelcreatepost} >
                <div className="form-group p-2">
                    <label className="w-100">Enter the message</label>
                    <input className="form-control w-100" value={post.message} onChange={(e)=>setpost({...post, message: e.target.value})} placeholder="Enter the message of the post" />
                </div>
                <div className=" form-group p-2">
                    <label  className="w-100">
                        Enter books names
                    </label>
                    <input className="form-control w-100"  value={post.name} onChange={(e)=> setpost({...post, bookname: e.target.value})} type="text" placeholder="Enter the book name" />
                </div>
                <div className="form-group p-2">
                    <label >Select the image of the book</label>
                    <input className="form-control w-100" type="file" placeholder="Select the image" />
                </div>
                <div className="form-group p-2">
                    <input type="submit" value="Submit" className="w-100 btn btn-primary" />
                </div>
            </form>
            </div>
        </div>
    )
}
export default Createpost;