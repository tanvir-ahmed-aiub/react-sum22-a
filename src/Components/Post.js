import {useState} from 'react';
import axios from 'axios';
const Post=()=>{
    const[post,setPost]=useState({});
    const LoadData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then((rsp)=>{
            setPost(rsp.data);
        },(err)=>{
            debugger;
        });

    }
    return(
        <div>
            <button onClick={LoadData}>Load Data</button>
            <h5>{post.userId}</h5>
            <h5>{post.id}</h5>
            <h3>{post.title}</h3>
            <textarea value={post.body}></textarea>
        </div>

    )
}
export default Post;