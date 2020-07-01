import axios from "axios";
import { url } from "./index";
import { notify } from "./helper";

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
      .get(`${url}/cart`, { headers: headers })
      .then((res) => {
        let present = false;
        for (let i = 0; i < res.data.data.length; i++) {
          if (
            productId === res.data.data[i].product._id.toString() &&
            res.data.data[i].savedForLater === false
          ) {
            present = true;
          }
        }
        if (present === false) {
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
              notify(true, "Some problem occured!!", null);
            });
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
        notify(true, "Some problem occured!!", null);
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
            if (res.data.data[i].purchased === false) {
              tempCart.push(res.data.data[i]);
            }
          }
        }
        console.log(tempCart);
        dispatch(cartItems(tempCart));
      })
      .catch(function (error) {
        console.log(error);
        notify(true, "Some problem occured!!", null);
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
        notify(true, "Deleted Sucessfully", null);
        dispatch(fetchCartItem(false));
      })
      .catch(function (error) {
        console.log(error);
        notify(true, "Some problem occured!!", null);
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
        notify(false, "Added to Wishlist !!", null);
      })
      .catch(function (error) {
        console.log(error);
        notify(true, "Some problem occured ", null);
      });
  };
};
