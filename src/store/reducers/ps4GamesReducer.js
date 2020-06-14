const ps4GamesReducer = (state = null, action) => {
  switch (action.type) {
    case "PS4_GAMES":
      return [...action.payload];
    default:
      return state;
  }
};

export default ps4GamesReducer;
