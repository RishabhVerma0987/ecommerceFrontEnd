const latestGamesReducer = (state = null, action) => {
  switch (action.type) {
    case "LATEST_GAMES":
      return [...action.payload];
    default:
      return state;
  }
};

export default latestGamesReducer;
