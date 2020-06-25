import axios from "axios";
import { url } from "./index";

/**
 * @param description : fetch all , filtered
 * @param url : url/product/?select=title,price,rating,photo (base)
 * @param dispatch : allGames()
 */

// platform: { $in: ["PS4", "XBOX"] },
// company: { $in: ["Activision", "Respawn", "Ubisoft"] },
// genre: { $in: ["RPG", "FPS"] },
// $and: [{ price: { $gt: 3000 } }, { price: { $lt: 4000 } }],
// pegi: { $in: ["13", "18"] },
// $and: [{ rating: { $gte: 5 } }, { rating: { $lte: 5 } }],

export const fetchAllGames = () => {
  return function (dispatch, query) {
    console.log("tempinside", query);
    return axios
      .post(`${url}/product/filter`, {
        ...query,
      })
      .then((res) => {
        console.log(res.data);
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
