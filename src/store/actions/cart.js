import axios from "axios";
import { url } from "./index";
import { useHistory } from "react-router-dom";

/**
 * @param description : create cart item
 * @param url : url/cart/:productId
 * @param dispatch : --
 */
export const createCart = (productId, router) => {
  return function (dispatch) {
    console.log(router);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return (
      axios
        .post(`${url}/cart/${productId}`, null, { headers: headers })
        .then((res) => {
          console.log(res.data);
        })

        .catch(function (error) {
          console.log(error.response.data);
          alert("Some Problem Occured");
        })
    );
  };
};

/**
 * @param description : get cart items
 * @param url : url/cart
 * @param dispatch : cartItems
 */

export const fetchCartItem = () => {
  return function (dispatch) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios
      .get(`${url}/cart`, { headers: headers })
      .then((res) => {
        dispatch(cartItems(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
        alert("Some Problem Occured");
      });
  };
};

// * called by fetchCartItems()
export const cartItems = (data) => {
  return {
    type: "CART_ITEMS",
    payload: data,
  };
};
