import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoList from "./TodoList";

function Completed() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <ul className="first:rounded-t-lg">
        {todos
          ?.filter((todo) => todo.isCompleted)
          .map((todo, i) => (
            <TodoList key={i} todo={todo} />
          ))}
      </ul>
    </div>
  );
}

export default Completed;
