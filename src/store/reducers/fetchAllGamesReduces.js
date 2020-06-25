const fetchAllGamesReducer = (state = null, action) => {
  switch (action.type) {
    case "ALL_GAMES":
      return [...action.payload];
    default:
      return state;
  }
};

export default fetchAllGamesReducer;
