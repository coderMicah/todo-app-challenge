import { createContext, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { statusReducer } from "../reducers/statusReducer";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [status, dispatchStatus] = useReducer(statusReducer, {
    isActive: false,
    isCompleted: false,
  });
  return (
    <TodoContext.Provider value={{ todos, status, dispatch, dispatchStatus }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContextProvider, TodoContext };
