//import bannerTopGamesData from "../../_data/bannerTopGames.json";
// import trendingGamesData from "../../_data/trendingGames.json";
// import latestGamesData from "../../_data/latest.json";
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

/**
 * @param description : fetch trending game , sorted by sold in span of one week
 * @param url : url/product?select=title,description,rating,sold,createdAt&sort=-sold&updatedAt[gt]=2020-06-06T15:17:54.320Z
 * @param dispatch : trendingGames()
 */

export const fetchTrendingGames = () => {
  return function (dispatch) {
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return axios
      .get(
        `${url}/product?select=title,photo,description,price,rating,sold,createdAt&sort=-sold&updatedAt[gt]=${oneWeekAgo}&limit=4`
      )
      .then((res) => {
        dispatch(trendingGames(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// * called by fetchTrendingGames()
export const trendingGames = (data) => {
  return {
    type: "TRENDING_GAMES",
    payload: data,
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
