export const todoReducer = (todos, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
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

    default:
      return todos;
  }
};
