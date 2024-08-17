import { useState } from "react";

let z = 0;

function Counter(){
    
    const[x, setX] = useState(0);
    const[y, setY] = useState(0);
    const[a, setA] = useState(0);
    const[isEditting, setIsEditting] = useState(false);

    return (
      <>
        count z = {z}
        <button
          onClick={() => {
            z += 1;
          }}
        >
          zIncrement
        </button>
        <button
          onClick={() => {
            z -= 1;
          }}
        >
          zDecrement
        </button>
        <br />
        count x : {x}
        <button onClick={() => setX(x + 1)}>Increment</button>
        <button onClick={() => setX(x - 1)}>Decrement</button>
        <br />
        count y : {y}
        <button onClick={() => setY(y + 1)}>Increment</button>
        <button onClick={() => setY(y - 1)}>Decrement</button>
        <br />
        count A: {a} is {a % 2 == 0 ? "Even" : "Odd"}
        <button onClick={() => setA(a + 1)}>Increment</button>
        <button onClick={() => setA(a - 1)}>Decrement</button>
        <br/>

        {
         isEditting ? <input /> : <p>Shourya Dubey</p>
        }
        <button onClick={() => setIsEditting(!isEditting)}>Click</button>
      </>
    );
}
export default Counter