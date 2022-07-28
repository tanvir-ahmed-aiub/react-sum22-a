import MenuItem from "./MenuItem";

const TopMenu=()=>{
    return (
        <div>
            <MenuItem url="/" title="Home"/>
            <MenuItem url="/event" title="Click Event"/>
            <MenuItem url="/paragraph" title="Paragraph"/>
            <MenuItem url="/post" title="Post"/>
            <MenuItem url="/create" title="Create Student"/>
            <MenuItem url="/list/student" title="List"/>
        </div>
    )
}
export default TopMenu;