import bannerTopGamesData from "../../_data/bannerTopGames.json";
import trendingGamesData from "../../_data/trendingGames.json";
import latestGamesData from "../../_data/latest.json";
import ps4GamesData from "../../_data/ps4Data.json";

export const topGamesBanner = () => {
  return {
    type: "TOP_GAMES",
    payload: bannerTopGamesData,
  };
};

export const trendingGames = () => {
  return {
    type: "TRENDING_GAMES",
    payload: trendingGamesData,
  };
};

export const latestGames = () => {
  return {
    type: "LATEST_GAMES",
    payload: latestGamesData,
  };
};

export const ps4Games = () => {
  return {
    type: "PS4_GAMES",
    payload: ps4GamesData,
  };
};
