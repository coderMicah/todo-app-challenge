import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoList({ todo }) {
  const { dispatch,dispatchStatus } = useContext(TodoContext);
  

  return (
    <li
      className={
        todo.isCompleted
          ? "flex items-center p-4 w-full bg-gray-900 border-b line-through text-gray-300"
          : "flex items-center p-4 w-full bg-gray-900  border-b"
      }
    >
      <button onClick={() =>{ dispatchStatus({type:"SET_ACTIVE_STATUS"}); console.log(todo,dispatchStatus);}} className="border rounded-full p-1  clicked:bg-blue-400 ">
        <img className="h-3 w-3" src="../../src/assets/icon-check.svg" alt="" />
      </button>

      <span onClick={() =>{ dispatchStatus({type:"SET_COMPLETED_STATUS"})}} className="ml-4 text-gray-500 font-semibold">{todo.todo}</span>

      <img
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
        className="ml-auto h-4"
        src="../../src/assets/icon-cross.svg"
        alt=""
      />
    </li>
  );
}

export default TodoList;
