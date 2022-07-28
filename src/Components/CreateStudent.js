import {useState} from 'react';
import axios from 'axios';
const CreateStudent=()=>{
    const[name,setName] = useState("");
    const[dob,setDob] = useState("");
    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var data = {name:name,dob:dob};
        axios.post("http://localhost:8000/api/student/create",data)
        .then((rsp)=>{
            setMsg(rsp.data.msg);
        },(er)=>{
            if(er.response.status==422) //for data validation
            {
                setErr(er.response.data);
            }else{
                setMsg("Server Error Occured");
            }
        })
    }
    return(
        <form onSubmit={handleForm}>
            <h3>{msg}</h3>
            Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <span>{err.name? err.name[0]:''}</span><br/>
            Date of Birth : <input type="text" value={dob} onChange={(e)=>{setDob(e.target.value)}} /> <span>{err.dob? err.dob[0]:''}</span><br/>
            <input type="submit" value="Create" />
        </form>
    )
}
export default CreateStudent;