import bannerTopGamesData from "../../_data/bannerTopGames.json";
import trendingGamesData from "../../_data/trendingGames.json";

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
