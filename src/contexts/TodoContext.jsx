import { createContext, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { statusReducer } from "../reducers/statusReducer";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
 
  const [todos, dispatch] = useReducer(todoReducer, [
    { id:1, todo: "Walk The Dog", isActive: false, isCompleted: true },
    { id:2, todo: "Pickup kids from school", isActive: true, isCompleted: false },
    { id:3, todo: "Learn Java", isActive: false, isCompleted: true },
  ]);
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
