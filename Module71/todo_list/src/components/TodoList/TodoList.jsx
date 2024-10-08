import Todo from "../Todo/Todo"

function TodoList({ list, updateList }) {
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todoData={todo.todoData}
            isFinished={todo.isFinished}
            changeFinished={(isFinished) => {
              const updatedList = list.map((t) => {
                if (t.id == todo.id) {
                  todo.finished = isFinished;
                }
                return t;
              });
              updateList(updatedList);
            }}
          />
        ))}
    </div>
  );
}

export default TodoList