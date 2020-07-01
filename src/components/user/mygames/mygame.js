import React, { useEffect } from "react";
import "./mygames.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyGames } from "../../../store/actions/profile";
import Loading from "../../main/resuables/loading";
import AOS from "aos";
import "aos/dist/aos.css";
function MyGames() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.myGamesReducer);
  useEffect(() => {
    dispatch(fetchMyGames());
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="mygames">
      <div className="cart-contents" style={{ paddingBottom: "10rem" }}>
        {games ? (
          games.length !== 0 ? (
            games?.map((game) => {
              return (
                <div className="item" data-aos="fade-down">
                  <div className="left">
                    <div className="display-photo">
                      <img src={game[0].photo} alt={game[0].title}></img>
                    </div>
                    <div className="information">
                      <h4>{game[0].title}</h4>
                      <p>
                        {game[0].rating} <span>⭐</span> , By{" "}
                        {game[0].company[0]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ color: "grey" }}>No Items to show</p>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
export default MyGames;
