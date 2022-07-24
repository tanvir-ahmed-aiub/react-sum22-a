import { useState } from "react";
const EventHandle =()=>{
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p>{count}</p>
        </div>
        
    )
}
export default EventHandle;