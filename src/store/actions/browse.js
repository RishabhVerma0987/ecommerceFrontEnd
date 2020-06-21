import axios from "axios";
import { url } from "./index";
/**
 * @param description : fetch all , filtered
 * @param url : url/product/?select=title,price,rating,photo (base)
 * @param dispatch : allGames()
 */

export const fetchAllGames = () => {
  return function (dispatch) {
    return axios
      .get(`${url}/product/?select=title,price,rating,photo&platform=PS4,XBOX`)
      .then((res) => {
        dispatch(allGames(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
// * called by fetchAllGames()
export const allGames = (data) => {
  return {
    type: "ALL_GAMES",
    payload: data,
  };
};
