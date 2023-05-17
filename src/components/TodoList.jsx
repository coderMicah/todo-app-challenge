import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoList({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <li
      className={
        todo.isCompleted
          ? "flex items-center p-4 w-full bg-[#fafafa] text-[#d2d3db] border-b border-2 border-[#484b6a ] line-through decoration-[#d2d3db] dark:bg-[#25273c] dark:text-[#4d5066] dark:decoration-[#4d5066]  dark:border-[#393a4c] "
          : "flex items-center p-4 w-full bg-[#fafafa] text-[#484b6a] border-b border-2 border-[#484b6a ] dark:bg-[#25273c] dark:border-[#393a4c] dark:text-[#cacde8] hover:text-[#e4e5f1]"
      }
    >
      <button
        onClick={() => {
          dispatch({ type: "SET_COMPLETED", payload: todo.id });
        }}
        className={
          todo.isCompleted
            ? "border rounded-full p-1 bg-gradient-to-br from-[#57ddff] to-[#c058f3] "
            : "border border-[#d2d3db]  rounded-full p-1 dark:border-[#4d5066]"
        }
      >
        <img
          className={todo.isCompleted ? "h-3 w-3" : "opacity-0"}
          src="/icon-check.svg"
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
        src="/icon-cross.svg"
        alt=""
      />
    </li>
  );
}

export default TodoList;
