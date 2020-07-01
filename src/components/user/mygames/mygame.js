import React, { useEffect } from "react";
import "./mygames.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyGames } from "../../../store/actions/profile";
import Loading from "../../main/resuables/loading";
function MyGames() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.myGamesReducer);
  useEffect(() => {
    dispatch(fetchMyGames());
  }, []);

  return (
    <div className="mygames">
      <div className="cart-contents" style={{ paddingBottom: "4rem" }}>
        {games ? (
          games?.map((game) => {
            return (
              <div className="item">
                <div className="left">
                  <div className="display-photo">
                    <img src={game[0].photo} alt={game[0].title}></img>
                  </div>
                  <div className="information">
                    <h4>{game[0].title}</h4>
                    <p>
                      {game[0].rating} <span>⭐</span> , By {game[0].company[0]}
                    </p>
                  </div>
                </div>
                <div className="right">$ 35.00 /-</div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
export default MyGames;
