const xboxGamesReducer = (state = null, action) => {
  switch (action.type) {
    case "XBOX_GAMES":
      return [...action.payload];
    default:
      return state;
  }
};

export default xboxGamesReducer;
