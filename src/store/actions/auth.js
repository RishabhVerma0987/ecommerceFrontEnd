import axios from "axios";
import { url } from "./index";
import { fetchCartItem } from "./cart";
import { notify } from "./helper";

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
        notify(false, "Sucessfully Registered", null);
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.data.success === false) {
          notify(true, "User already registered please login", null);
        } else {
          notify(true, "Some problem occured", null);
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
        notify(false, "Sucessfully Login !! 👌", null);
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.data.success === false) {
          notify(
            true,
            "Email , Password is wrong please try register or try again",
            null
          );
        } else {
          notify(true, "Some problem occured", null);
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
          notify(true, "Please Login or Register first", null);
        } else {
          notify(true, "Some problem occured", null);
        }
      });
  };
};
