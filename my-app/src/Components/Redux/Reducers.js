export const resultReducer = (state = 0, action) => {
  switch (action.type) {
    case "FINAL-RESULT":
      return (state = state + 1);
    default:
      return state;
  }
};
