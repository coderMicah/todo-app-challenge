import { TodoContextProvider } from "./contexts/TodoContext";

//components
import TodoLayout from "./components/TodoLayout";
import Togglers from "./components/Togglers";
import AddTodoInput from "./components/AddTodoInput";

function App() {
  return (
    <TodoContextProvider>
      <div className="bg-gray-800 h-screen">
        <img
          className="w-full"
          src="../src/assets/bg-desktop-dark.jpg"
          alt=""
        />
        <div className=" lg:-translate-y-[200px] mx-auto px-4 max-w-2xl">
          <AddTodoInput />
          <TodoLayout />
          <Togglers />
          <p className="mt-5 text-center text-gray-400">
            Drag and drop to reorder list
          </p>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
