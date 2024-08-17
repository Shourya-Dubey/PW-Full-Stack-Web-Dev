import { useState } from "react";

function Todo(){

    const[todos, setTodos] = useState(['Todo1', 'Todo2'])

    return (
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
          <button onClick={() => setTodos([...todos, "newTodo"])}>
            Add Todos
          </button>
        </ul>
    );    
}
export default Todo;