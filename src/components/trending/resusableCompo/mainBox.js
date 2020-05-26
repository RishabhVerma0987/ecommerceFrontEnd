import React, { useEffect } from "react";
import "./mainBox.scss";
import { useDispatch, useSelector } from "react-redux";
import { trendingGames } from "../../../store/actions";
function MainBox() {
  const dispatch = useDispatch();
  const stateTrendingGames = useSelector((state) => state.trendingGamesReducer);

  useEffect(() => {
    dispatch(trendingGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-box">
      <h1>Trending Now</h1>
      <div className="content">
        {stateTrendingGames
          ? stateTrendingGames.map((i) => {
              return (
                <div className="card">
                  <div className="image">
                    <img
                      src={require(`../../../assets/${i.image_name}.jpg`)}
                      alt="cyberpunk"
                    ></img>
                  </div>
                  <div className="info">
                    <h5>{i.title}</h5>

                    <p>{i.description}</p>
                    <div className="pricing">
                      <div className="order-rating">
                        <button>Order now</button>
                        <p>{i.rating}</p>
                      </div>
                      <div className="cart-wish">
                        <img
                          className="cart"
                          src={require("../../../assets/cart.svg")}
                          alt="cart"
                        ></img>
                        <img
                          src={require("../../../assets/wishlist.svg")}
                          alt="cart"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default MainBox;
