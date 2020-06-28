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
