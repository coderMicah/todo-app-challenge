import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function AddTodoInput() {
  const { dispatch } = useContext(TodoContext);
  function handleKeyUp(event) {
    event.preventDefault()
    if (event.keyCode === 13) {
      dispatch({ type: "ADD_TODO", payload: event.target.value });
      event.target.value = "";
    }
  }
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-white text-4xl uppercase font-semibold tracking-widest">
          Todo
        </h1>
        <button>
          <img className="h-4" src="../src/assets/icon-moon.svg" alt="" />
        </button>
      </div>

      <input
        className="pl-12 py-4 my-4 w-full bg-gray-900 rounded-md text-gray-100"
        type="text"
        placeholder="Currently Typing"
        onKeyUp={e => handleKeyUp(e)}
      />
    </>
  );
}

export default AddTodoInput;
