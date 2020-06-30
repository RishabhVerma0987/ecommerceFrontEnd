import { combineReducers } from "redux";
import bannerTopGamesReducer from "./bannerTopGamesReducer";
import trendingGamesReducer from "./trendingGamesReducer";
import latestGamesReducer from "./latestGamesReducer";
import ps4GamesReducer from "./ps4GamesReducer";
import xboxGamesReducer from "./xboxGamesReducer";
import fetchAllGamesReducer from "./fetchAllGamesReduces";
import singleGameReducer from "./singleGameReducer";
import cartItemsReducer from "./cartItemsReducer";
import authReducer from "./authReducer";
import myGamesReducer from "./mygamesReducer";
const rootReducers = combineReducers({
  bannerTopGamesReducer: bannerTopGamesReducer,
  trendingGamesReducer: trendingGamesReducer,
  latestGamesReducer: latestGamesReducer,
  ps4GamesReducer: ps4GamesReducer,
  xboxGamesReducer: xboxGamesReducer,
  fetchAllGamesReducer: fetchAllGamesReducer,
  singleGameReducer: singleGameReducer,
  cartItemsReducer: cartItemsReducer,
  authReducer: authReducer,
  myGamesReducer: myGamesReducer,
});

export default rootReducers;
