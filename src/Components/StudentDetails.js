import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
const StudentDetails=(props)=>{
    const {id} = useParams();
    const [student,setStudent] = useState({});
    useEffect(()=>{
        //axioscall
    },[]);
return (
    <div>
        <h1>Student Details {id}</h1>
    </div>
)
}

export default StudentDetails;