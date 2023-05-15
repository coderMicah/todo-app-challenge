export const todoReducer = (todos, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);

    case "CLEAR_COMPLETED":
      return todos.filter((todo) => !todo.isCompleted);

    case "ADD_TODO":
      return [
        ...todos,
        {
          id: crypto.randomUUID(),
          todo: action.payload,
          isActive: false,
          isCompleted: false,
        },
      ];
    case "SET_ACTIVE":
      return [
        ...todos.map((todo) => {
          return {
            ...todo,
            isActive:
              todo.id === action.payload ? !todo.isActive : todo.isActive,
          };
        }),
      ];
    case "SET_COMPLETED":
      return [
        ...todos.map((todo) => {
          return {
            ...todo,
            isCompleted:
              todo.id === action.payload ? !todo.isCompleted : todo.isCompleted,
          };
        }),
      ];

    default:
      return todos;
  }
};
