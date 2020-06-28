import axios from "axios";
import { url } from "./index";

/**
 * @param description : register
 * @param url : url/auth/register
 * @param dispatch : allGames()
 */

export const registerUser = (name, email, password) => {
  return function (dispatch) {
    return axios
      .post(`${url}/auth/register`, { name, email, password })
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
 * @param description : login
 * @param url : url/auth/login
 * @param dispatch : login
 */

export const loginUser = (email, password) => {
  return function (dispatch) {
    return axios
      .post(`${url}/auth/login`, { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.data.success === false) {
          alert("Email , Password is wrong please try register or try again");
        } else {
          alert("Some Problem Occured");
        }
      });
  };
};

// * called by loginUser()
export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
