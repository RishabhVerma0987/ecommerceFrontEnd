import axios from "axios";
import { url } from "./index";
/**
 * @param description : fetch all , filtered
 * @param url : url/product/?select=title,price,rating,photo (base)
 * @param dispatch : allGames()
 */

/**
 *
 * @param query = {
 *
 *  platform:[PS4,XBOX,PX],
 *  genre:[RPG,...]
 *  price:[under 1000 , ...] //!needs further transformation to [{ sign:"lt" , value:1000 }]
 *  pegi:[pegi 18+ , pegi 13+] //!needs futher transform [{ sign:"gt" , value:18 }]
 *  comapany:[Ubisoft , ...]
 *  user rating:[1-2,2-3,...] //!just add [lt] 2 , [gt] 3
 * }
 */

export const fetchAllGames = (query) => {
  return function (dispatch) {
    return axios
      .get(`${url}/product`)
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
