import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function Togglers() {
  const { todos, dispatch, dispatchStatus } = useContext(TodoContext);
  const activeTodos = todos.filter((todo) => todo.isCompleted !== true).length;

  if (todos.length > 0)
    return (
      <>
        <div className=" flex justify-between  items-center p-4 bg-[#fafafa] text-[#9394a5]  rounded-b-md dark:bg-[#25273c] dark:text-[#4d5066]">
          {activeTodos > 1 ? (
            <p>{activeTodos} items left</p>
          ) : (
            <p>All Completed </p>
          )}
          <ul className="hidden font-bold sm:flex mx-auto md:mx-0 space-x-4">
            <li
              tabIndex="0"
              className="cursor-pointer hover:text-[#484b6a] dark:hover:text-[#e4e5f1] focus:text-[#3a7bfd]"
              onClick={() => dispatchStatus({ type: "DEFAULT" })}
            >
              All
            </li>
            <li
              tabIndex="0"
              className="cursor-pointer hover:text-[#484b6a] dark:hover:text-[#e4e5f1] focus:text-[#3a7bfd]"
              onClick={() => dispatchStatus({ type: "SET_ACTIVE" })}
            >
              Active{" "}
            </li>
            <li
              tabIndex="0"
              className="cursor-pointer hover:text-[#484b6a] dark:hover:text-[#e4e5f1] focus:text-[#3a7bfd]"
              onClick={() => dispatchStatus({ type: "SET_COMPLETED" })}
            >
              Completed
            </li>
          </ul>
          <p
            className="cursor-pointer hover:text-[#484b6a] dark:hover:text-[#e4e5f1] focus:text-[#3a7bfd]"
            onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
          >
            Clear Completed
          </p>
        </div>

        <div className="sm:hidden my-4 p-4 bg-[#fafafa] text-[#9394a5] rounded-md">
          <ul className="flex font-bold  sm:hidden justify-center space-x-4">
            <li
              tabIndex="0"
              className="cursor-pointer hover:text-[#484b6a] dark:hover:text-[#e4e5f1] focus:text-[#3a7bfd]"
              onClick={() => dispatchStatus({ type: "DEFAULT" })}
            >
              All
            </li>
            <li
              tabIndex="0"
              className="cursor-pointer hover:text-[#484b6a] dark:hover:text-[#e4e5f1] focus:text-[#3a7bfd]"
              onClick={() => dispatchStatus({ type: "SET_ACTIVE" })}
            >
              Active{" "}
            </li>
            <li
              tabIndex="0"
              className="cursor-pointer hover:text-[#484b6a] dark:hover:text-[#e4e5f1] focus:text-[#3a7bfd]"
              onClick={() => dispatchStatus({ type: "SET_COMPLETED" })}
            >
              Completed
            </li>
          </ul>
        </div>

        <p className="mt-5 text-center text-[#9394a5] dark:text-[#4d5066]">
          Drag and drop to reorder list
        </p>
      </>
    );
}

export default Togglers;
