import axios from "axios";
import { url } from "./index";

/**
 * @param description : wishlist
 * @param url : url/auth/login
 * @param dispatch : allGames()
 */

export const loginUser = (email, password) => {
  return function (dispatch) {
    return axios
      .post(`${url}/auth/login`, { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch(function (error) {
        console.log(error);
        alert("Some Problem Occured");
      });
  };
};

/**
 * @param description : fetch all of my games
 * @param url : url/mygames
 * @param dispatch : mygame
 */

export const fetchMyGames = () => {
  return function (dispatch) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get(`${url}/mygames`, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(mygames(res.data.games));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
// * called by fetchXBOXGames()
export const mygames = (data) => {
  return {
    type: "MY_GAMES",
    payload: data,
  };
};
