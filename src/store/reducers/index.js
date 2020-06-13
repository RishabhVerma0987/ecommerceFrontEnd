import { combineReducers } from "redux";
import bannerTopGamesReducer from "./bannerTopGamesReducer";
import trendingGamesReducer from "./trendingGamesReducer";
import latestGamesReducer from "./latestGamesReducer";
const rootReducers = combineReducers({
  bannerTopGamesReducer: bannerTopGamesReducer,
  trendingGamesReducer: trendingGamesReducer,
  latestGamesReducer: latestGamesReducer,
});

export default rootReducers;
