import bannerTopGamesData from "../../_data/bannerTopGames.json";
import trendingGamesData from "../../_data/trendingGames.json";
import latestGamesData from "../../_data/latest.json";
import ps4GamesData from "../../_data/ps4Data.json";
import xboxGamesData from "../../_data/xboxData.json";
import axios from "axios";

const url = "https://rishabhvermaeccom.azurewebsites.net/api/v1";

/**
 * @param description : fetch 3 data based on the number of sold in decending order
 * @param url : url/product/?sort=-sold
 * @param dispatch : topGamesBanner()
 */

export const fetchTopGamesBanner = () => {
  console.log("run");
  return function (dispatch) {
    return axios
      .get(`${url}/product/?sort=-sold&select=title,photo&limit=3`)
      .then((res) => {
        dispatch(topGamesBanner(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// * called by fetchTopGamesBanner()
export const topGamesBanner = (data) => {
  return {
    type: "TOP_GAMES",
    payload: data,
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

export const xboxGames = () => {
  return {
    type: "XBOX_GAMES",
    payload: xboxGamesData,
  };
};
