import { useState } from "react";
import axiosConfig from './axiosConfig';
const Form =()=>{
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");

    const Submit=(event)=>{
        event.preventDefault();
        var data={uname:name, pass:pass};
        axiosConfig.post("/login",data)
        .then((rsp)=>{
            localStorage.setItem('_authToken',rsp.data.token);
        },(err)=>{
            
        });


    }
    
    return(
        <form onSubmit={Submit}>
            Username : <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/><br/>
            Password:  <input type="password" onChange={(e)=>setPass(e.target.value)} value={pass} ></input><br/>
            <input type="submit" value="login"/>
        </form>
    )
}

export default Form;