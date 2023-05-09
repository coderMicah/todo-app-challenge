import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function Togglers() {
  const { todos, dispatchStatus } = useContext(TodoContext);
  const activeTodos = todos.filter((todo) => todo.isCompleted !== true).length;
  return (
    <>
      <div className=" flex justify-between  items-center p-4 text-gray-400 bg-gray-900 rounded-b-md">
        {activeTodos > 1 ? (
          <p>{activeTodos} items left</p>
        ) : (
          <p>{activeTodos} item left</p>
        )}
        <ul className="hidden sm:flex mx-auto md:mx-0 space-x-4">
          <li onClick={() => dispatchStatus({ type: "DEFAULT" })}>All</li>
          <li onClick={() => dispatchStatus({ type: "SET_ACTIVE" })}>
            Active{" "}
          </li>
          <li onClick={() => dispatchStatus({ type: "SET_COMPLETED" })}>
            Completed
          </li>
        </ul>
        <p>Clear Completed</p>
      </div>

      <div className="sm:hidden my-4 p-4 text-gray-400 bg-gray-900 rounded-md">
        <ul className="flex sm:hidden justify-center space-x-4">
          <li onClick={() => dispatchStatus({ type: "DEFAULT" })}>All</li>
          <li onClick={() => dispatchStatus({ type: "SET_ACTIVE" })}>
            Active{" "}
          </li>
          <li onClick={() => dispatchStatus({ type: "SET_COMPLETED" })}>
            Completed
          </li>
        </ul>
      </div>
    </>
  );
}

export default Togglers;
