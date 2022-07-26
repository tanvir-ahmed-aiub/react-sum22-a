import Paragraph from "./Paragraph";
import Form from "./Form";
import TopMenu from "./TopMenu";
import EventHandle from "./EventHandle";
import Post from "./Post";
const Main=()=>{
    return (
        <div>
            <TopMenu/>
            <Form></Form>
            <Paragraph/>
            <EventHandle/>
            <Post/>
        </div>
    )
}
export default Main;