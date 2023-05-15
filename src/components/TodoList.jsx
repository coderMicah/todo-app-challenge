import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoList({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <li
      className={
        todo.isCompleted
          ? "flex items-center p-4 w-full bg-gray-900 text-gray-600 border-b border-gray-600 line-through decoration-gray-500 "
          : "flex items-center p-4 w-full bg-gray-900 text-gray-300 border-b border-gray-600"
      }
    >
      <button
        onClick={() => {
          dispatch({ type: "SET_COMPLETED", payload: todo.id });
        }}
        className={
          todo.isCompleted
            ? "border rounded-full p-1 bg-gradient-to-br from-[#57ddff] to-[#c058f3] "
            : "border rounded-full p-1 border-gray-600"
        }
      >
        <img
          className={todo.isCompleted ? "h-3 w-3" : "opacity-0"}
          src="../../src/assets/icon-check.svg"
          alt=""
        />
      </button>

      <span
        onClick={() => {
          dispatch({ type: "SET_COMPLETED", payload: todo.id });
        }}
        className="ml-4 font-semibold cursor-pointer"
      >
        {todo.todo}
      </span>

      <img
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
        className="hidden sm:block ml-auto h-4"
        src="../../src/assets/icon-cross.svg"
        alt=""
      />
    </li>
  );
}

export default TodoList;
