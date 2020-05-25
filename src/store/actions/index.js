import bannerTopGames from "../../_data/bannerTopGames.json";

export const topGamesBanner = () => {
  return {
    type: "TOP_GAMES",
    payload: bannerTopGames,
  };
};
