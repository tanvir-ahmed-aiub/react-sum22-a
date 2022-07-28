import {useState} from 'react';
import axios from 'axios';
const ListStudents=()=>{
    const [students,setStudents] = useState([]);
    const LoadData=()=>{
        axios.get("http://localhost:8000/api/student/list")
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
                        <li>{st.name}</li>
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
                            <td>{st.id}</td>
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