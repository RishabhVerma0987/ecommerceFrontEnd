import { combineReducers } from "redux";
import bannerTopGamesReducer from "./bannerTopGamesReducer";
import trendingGamesReducer from "./trendingGamesReducer";
import latestGamesReducer from "./latestGamesReducer";
import ps4GamesReducer from "./ps4GamesReducer";
import xboxGamesReducer from "./xboxGamesReducer";
const rootReducers = combineReducers({
  bannerTopGamesReducer: bannerTopGamesReducer,
  trendingGamesReducer: trendingGamesReducer,
  latestGamesReducer: latestGamesReducer,
  ps4GamesReducer: ps4GamesReducer,
  xboxGamesReducer: xboxGamesReducer,
});

export default rootReducers;
