import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function AddTodoInput() {
  const { dispatch } = useContext(TodoContext);

  function handleKeyUp(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      dispatch({ type: "ADD_TODO", payload: event.target.value });
      event.target.value = "";
    }
  }

  function handleBlur(event) {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: event.target.value });
    event.target.value = "";
  }

  function handleClick() {
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  }
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-white text-4xl uppercase font-semibold tracking-widest">
          Todo
        </h1>
        <button onClick={() => handleClick()}>
          <img
            className="h-8 dark:hidden"
            src="/icon-moon.svg"
            alt="moon-icon"
          />
          <img
            className="h-8 hidden dark:block"
            src="/icon-sun.svg"
            alt="sun-icon"
          />
        </button>
      </div>

      <input
        className="pl-12 py-4 my-4 w-full bg-[#fafafa] rounded-md text-[#484b6a] focus:outline-none placeholder:text-[#9394a5 ] placeholder:font-semibold dark:bg-[#25273c] dark:text-[#777a92]"
        type="text"
        placeholder="Create a new todo ..."
        onKeyUp={(e) => handleKeyUp(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </>
  );
}

export default AddTodoInput;
