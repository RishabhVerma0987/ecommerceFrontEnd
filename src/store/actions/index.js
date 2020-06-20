//import bannerTopGamesData from "../../_data/bannerTopGames.json";
import trendingGamesData from "../../_data/trendingGames.json";
import latestGamesData from "../../_data/latest.json";
//import ps4GamesData from "../../_data/ps4Data.json";
//import xboxGamesData from "../../_data/xboxData.json";
import axios from "axios";

const url = "https://rishabhvermaeccom.azurewebsites.net/api/v1";

/**
 * @param description : fetch 3 data based on the number of sold in decending order
 * @param url : url/product/?sort=-sold
 * @param dispatch : topGamesBanner()
 */

export const fetchTopGamesBanner = () => {
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

/**
 * @param description : fetch latest game , sort by created at , length = 4
 * @param url : url/product/?sort=createdAt
 * @param dispatch : latestGames()
 */

export const fetchLatestGamesBanner = () => {
  return function (dispatch) {
    return axios
      .get(`${url}/product/?sort=createdAt&limit=4&select=title,photo`)
      .then((res) => {
        dispatch(latestGames(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
// * called by fetchLatestGamesBanner()
export const latestGames = (data) => {
  return {
    type: "LATEST_GAMES",
    payload: data,
  };
};

/**
 * @param description : fetch  data based whose platform = PS4
 * @param url : url/product/?platform=PS4&select=title,price,rating,photo
 * @param dispatch : ps4Games()
 */

export const fetchPS4Games = () => {
  return function (dispatch) {
    return axios
      .get(`${url}/product/?platform=PS4&select=title,price,rating,photo`)
      .then((res) => {
        dispatch(ps4Games(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
// * called by fetchPS4Games()
export const ps4Games = (data) => {
  return {
    type: "PS4_GAMES",
    payload: data,
  };
};

/**
 * @param description : fetch  data based whose platform = XBOX
 * @param url : url/product/?platform=XBOX&select=title,price,rating,photo
 * @param dispatch : xboxGames()
 */

export const fetchXBOXGames = () => {
  return function (dispatch) {
    return axios
      .get(`${url}/product/?platform=XBOX&select=title,price,rating,photo`)
      .then((res) => {
        dispatch(xboxGames(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
// * called by fetchXBOXGames()
export const xboxGames = (data) => {
  return {
    type: "XBOX_GAMES",
    payload: data,
  };
};
