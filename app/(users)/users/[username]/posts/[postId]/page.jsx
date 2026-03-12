




/*const SingleProfilePost = async (props) => {

    const user = await props.params;
    console.log(user)
    return (
        //<h1>user = {user.postId} </h1>
        <h1>user : {user.username} , PostId : {user.postId}</h1>
    )
    
    
};


export default SingleProfilePost; */



"use client"
import { use } from "react";

const SingleProfilePost =  (props) => {

    const user = use( props.params)
    console.log(user)
    return (
        //<h1>user = {user.postId} </h1>
        <h1>user : {user.username} , PostId : {user.postId}</h1>
    )
    
    
};


export default SingleProfilePost;

