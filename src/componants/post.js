import React from 'react';
const Post = ({post, name}) => {
    console.log("the name inside the name ",name);
    console.log("post componant is created ");
    return (
        <div className="Post">
            <h1>{post.bookname}</h1>
            <h1>{post.message}</h1>
            <h1>{post.amount}</h1>
            <img src={post.selectedimage[0]} alt="Red dot" />
        </div>
    )
}
export default Post;