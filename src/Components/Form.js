import { useState } from "react";
import axios from 'axios';
const Form =()=>{
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");

    const Submit=(event)=>{
        event.preventDefault();
        var data={uname:name, pass:pass};
        axios.post("",data)
        .then((rsp)=>{

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