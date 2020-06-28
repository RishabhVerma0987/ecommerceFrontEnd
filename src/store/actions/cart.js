import axios from "axios";
import { url } from "./index";

/**
 * @param description : create cart item
 * @param url : url/cart/:productId
 * @param dispatch : --
 */
export const createCart = (productId, add) => {
  return function (dispatch) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios
      .post(`${url}/cart/${productId}`, null, { headers: headers })
      .then((res) => {
        console.log(res.data);
        if (add === true) {
          dispatch(addToWishList(res.data.createdData._id.toString()));
        }
      })

      .catch(function (error) {
        console.log(error.response.data);
        alert("Some Problem Occured");
      });
  };
};

/**
 * @param description : get cart items
 * @param url : url/cart
 * @param dispatch : cartItems
 */

export const fetchCartItem = (bool) => {
  return function (dispatch) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios
      .get(`${url}/cart`, { headers: headers })
      .then((res) => {
        let tempCart = [];
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].savedForLater === bool) {
            tempCart.push(res.data.data[i]);
          }
        }
        dispatch(cartItems(tempCart));
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

/**
 * @param description : delete cart items
 * @param url : url/cart
 * @param dispatch : cartItems
 */

export const deleteCartItem = (id) => {
  return function (dispatch) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios
      .delete(`${url}/cart/${id}`, { headers: headers })
      .then((res) => {
        console.log(res.data);
        dispatch(fetchCartItem());
      })
      .catch(function (error) {
        console.log(error);
        alert("Some Problem Occured");
      });
  };
};

/**
 * @param description : add to wishlist
 * @param url : url/cart/:id
 * @param dispatch : ---
 */

export const addToWishList = (cartId) => {
  return function (dispatch) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .put(
        `${url}/cart/${cartId}`,
        { savedForLater: true },
        { headers: headers }
      )
      .then((res) => {
        console.log(res.data);
        alert("added to wishlist");
      })
      .catch(function (error) {
        console.log(error);
        alert("Some Problem Occured");
      });
  };
};
