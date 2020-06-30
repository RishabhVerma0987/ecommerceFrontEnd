const myGamesReducer = (state = null, action) => {
  switch (action.type) {
    case "MY_GAMES":
      return [...action.payload];
    default:
      return state;
  }
};

export default myGamesReducer;
