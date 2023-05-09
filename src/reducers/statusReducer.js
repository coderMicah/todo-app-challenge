export const statusReducer = (status, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return { ...status, isActive: true };
    case "SET_COMPLETED":
      return { ...status, isCompleted: true };
    case "DEFAULT":
      return { isCompleted: false, isActive: false };

    default:
      return status;
  }
};
