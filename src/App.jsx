import { TodoContextProvider } from "./contexts/TodoContext";

//components
import TodoLayout from "./components/TodoLayout";
import Togglers from "./components/Togglers";
import AddTodoInput from "./components/AddTodoInput";
import CustomImage from "./components/CustomImages";

function App() {
  return (
    <div className="mx-auto">
      <TodoContextProvider>
        <div className="bg-[#e4e5f1] h-screen dark:bg-[#161722]">
          <CustomImage />

          <div className="mx-auto relative -my-32 xs:-my-60 px-4 max-w-2xl z-10">
            <AddTodoInput />
            <TodoLayout />
            <Togglers />
          </div>
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
