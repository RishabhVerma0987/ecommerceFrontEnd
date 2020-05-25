import { combineReducers } from "redux";
import bannerTopGamesReducer from "./bannerTopGamesReducer";
const rootReducers = combineReducers({
  bannerTopGamesReducer: bannerTopGamesReducer,
});

export default rootReducers;
