const bannerTopGamesReducer = (state = null, action) => {
  switch (action.type) {
    case "TOP_GAMES":
      return [...action.payload];
    default:
      return state;
  }
};

export default bannerTopGamesReducer;
