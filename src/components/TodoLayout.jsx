//context
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

//components
import TodoList from "./TodoList";
import Completed from "./Completed";
import Active from "./Active";

function TodoLayout() {
  const { todos } = useContext(TodoContext);
  const { status } = useContext(TodoContext);
  console.log(todos);

  if (status.isCompleted) return <Completed />;
  if (status.isActive) return <Active />;

  return (
    <div>
      <ul className="first:rounded-t-lg">
        {todos?.map((todo, i) => (
          <TodoList key={i} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoLayout;
