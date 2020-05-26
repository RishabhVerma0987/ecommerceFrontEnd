import { combineReducers } from "redux";
import bannerTopGamesReducer from "./bannerTopGamesReducer";
import trendingGamesReducer from "./trendingGamesReducer";
const rootReducers = combineReducers({
  bannerTopGamesReducer: bannerTopGamesReducer,
  trendingGamesReducer: trendingGamesReducer,
});

export default rootReducers;
