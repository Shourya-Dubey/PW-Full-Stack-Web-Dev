import { useState } from "react";

function Conditional(){

    const[isEditting, setIsEditting] = useState(false)
    const[a, setA] = useState(0);

    return(
        <>
        {
            isEditting ? <input/> : <p>Paragraph</p>
        }
        <button onClick={()=>setIsEditting(!isEditting)}>Click</button>
        <br/>

        count a = {a} is {a%2 ==0 ? "Even" : "Odd"}
        <button onClick={()=>setA(a+1)}>Increment</button>
        <button onClick={()=>setA(a-1)}>Decrement</button>
        </>
    )
}

export default Conditional;