import bannerTopGamesData from "../../_data/bannerTopGames.json";
import trendingGamesData from "../../_data/trendingGames.json";
import latestGamesData from "../../_data/latest.json";

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
