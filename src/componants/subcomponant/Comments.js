import React from 'react';
import { useState } from 'react';
const  Comments = ()=>{
    const [message , setmessage] = useState("");
    function  handelcommentclick(e){
        e.preventDefault();
        
    }
    


    return (
        <div className="Comments">
            <div>
                <h1>the previous comments </h1>

            </div>
            
            <div className="d-flex">

                <input type="text" onChange={(e)=> setmessage(e.target.value)} className=" w-100" name="" id="" placeholder="Enter your message " />
                <button className="btn btn-primary w-20" type="submit">post</button>

            </div>
        </div>
    )
}

export default  Comments;