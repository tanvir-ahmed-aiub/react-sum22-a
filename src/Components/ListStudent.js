import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
const ListStudents=()=>{
    const [students,setStudents] = useState([]);
    useEffect(()=>{
        axiosConfig.get("/student/list")
        .then((rsp)=>{
            setStudents(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const LoadData=()=>{
        axiosConfig.get("/student/list")
        .then((rsp)=>{
            setStudents(rsp.data);
        },(err)=>{
            
        })
    }
    return(
        <div>
            <button onClick={LoadData}>Load Data</button>
            <ul>
                {
                    students.map((st)=>(
                        <li key={st.id}>{st.name}</li>
                    ))
                }
            </ul>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Dob</th>
                </tr>
                {
                    students.map((st)=>(
                        <tr>
                            <td><Link to={`/student/details/${st.id}`}>{st.id}</Link></td>
                            <td>{st.name}</td>
                            <td>{st.dob}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default ListStudents;