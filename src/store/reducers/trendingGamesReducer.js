const trendingGamesReducer = (state = null, action) => {
  switch (action.type) {
    case "TRENDING_GAMES":
      return [...action.payload];
    default:
      return state;
  }
};

export default trendingGamesReducer;
