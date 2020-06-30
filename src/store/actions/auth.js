import axios from "axios";
import { url } from "./index";
import { fetchCartItem } from "./cart";

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
        dispatch(login(res.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.data.success === false) {
          alert("User already registered please login");
        } else {
          alert("Some Problem Occured");
        }
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

/**
 * @param description : auth me
 * @param url : url/auth/login
 * @param dispatch : login
 */

export const AuthMe = (bool) => {
  return function (dispatch) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios
      .get(`${url}/auth/me`, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.sucess === true) {
          localStorage.setItem("user_email", res.data.data.email);
          localStorage.setItem("user_id", res.data.data._id);
        }

        if (bool) {
          dispatch(fetchCartItem(false));
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.data.success === false) {
          alert("Please Login or Register first");
        } else {
          alert("Some Problem Occured");
        }
      });
  };
};
