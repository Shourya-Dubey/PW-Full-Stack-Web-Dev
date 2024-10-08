import { useState } from "react";

let z = 0;

function Counter(){
    
    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

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
        </>
      );
}

export default Counter;