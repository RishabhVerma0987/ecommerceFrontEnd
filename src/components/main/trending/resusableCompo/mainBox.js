import React, { useEffect } from "react";
import "./mainbox.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingGames } from "../../../../store/actions";
import CartSVG from "../../resuables/cartsvg";
import WishListSVG from "../../resuables/wishlistsvg";
import { Link } from "react-router-dom";

function MainBox() {
  const dispatch = useDispatch();
  const stateTrendingGames = useSelector((state) => state.trendingGamesReducer);

  useEffect(() => {
    dispatch(fetchTrendingGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-box">
      <h1>Trending Now</h1>
      <div className="content">
        {stateTrendingGames
          ? stateTrendingGames.map((i) => {
              return (
                <div className="card" key={i._id}>
                  <Link to={`/product/${i._id}`}>
                    <div className="image">
                      <img src={i.photo} alt="cyberpunk"></img>
                    </div>
                  </Link>

                  <div className="info">
                    <Link to={`/product/${i._id}`}>
                      <h5>{i.title}</h5>
                    </Link>
                    <p>{i.description}</p>
                    <div className="pricing">
                      <div className="order-rating">
                        <button>$ {i.price}</button>
                        <p>{i.rating}</p>
                      </div>
                      <div className="cart-wish">
                        <div>
                          <WishListSVG productId={i._id} />
                        </div>
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
