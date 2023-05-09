//context
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

//components
import TodoList from "./TodoList";

function Active() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <ul className="first:rounded-t-lg">
        {todos
          ?.filter((todo) => todo.isActive)
          .map((todo, i) => (
            <TodoList key={i} todo={todo}  />
          ))}
      </ul>
    </div>
  );
}

export default Active;
