import Paragraph from "./Paragraph";
import Form from "./Form";
import TopMenu from "./TopMenu";
import EventHandle from "./EventHandle";
import Post from "./Post";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CreateStudent from "./CreateStudent";
import ListStudents from "./ListStudent";
import StudentDetails from "./StudentDetails";
const Main=()=>{
    return (
        <div>
            <BrowserRouter>
                <TopMenu/>
                <Routes>
                    <Route path="/" element={<Form/>}></Route>
                    <Route path="/paragraph" element={<Paragraph/>}></Route>
                    <Route path="/event" element={<EventHandle/>}></Route>
                    <Route path="/post" element={<Post/>}></Route>
                    <Route path="/create" element={<CreateStudent/>}></Route>
                    <Route path="/list/student" element={<ListStudents/>}></Route>
                    <Route path="/student/details/:id" element={<StudentDetails/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Main;