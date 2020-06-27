const singleGameReducer = (state = null, action) => {
  switch (action.type) {
    case "SINGLE_GAME":
      return { ...action.payload };
    default:
      return state;
  }
};

export default singleGameReducer;
