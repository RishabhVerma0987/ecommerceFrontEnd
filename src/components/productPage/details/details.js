import React from "react";
import "./details.scss";
import { useDispatch } from "react-redux";
import { createCart } from "../../../store/actions/cart";
import { useHistory } from "react-router-dom";
function Details({ game }) {
  const dispatch = useDispatch();
  let history = useHistory();
  const price = (price, offer) => {
    let priceInt = parseInt(price);
    let offerInt = parseInt(offer);

    if (priceInt === 0) {
      return 0;
    }
    if (priceInt === -1) {
      return "Pre Order";
    }

    return (priceInt * offerInt) / 100;
  };

  const final = () => {
    dispatch(createCart(game._id, null)).then(() => {
      history.push("/cart");
    });
  };

  return (
    <div className="details">
      <div className="title">
        <p>{game?.title}</p>
      </div>
      <div className="rating">
        <p>
          {game?.rating} <span>⭐</span>
        </p>
        <div className="feedback">{game?.company}</div>
      </div>
      <div className="description">
        <p>{game?.description}</p>
      </div>
      <div className="price">
        <p>$ {price(game?.price, game?.offer)} /- </p>
        <div className="off">
          <p className="tag">$ {game?.price}</p>
          <p className="style">{game?.offer}% OFF</p>
        </div>
      </div>
      <div className="control">
        <button className="addtocart" onClick={() => final()}>
          ADD TO CART
        </button>

        <button className="wishlist">WISHLIST</button>
      </div>
    </div>
  );
}

export default Details;
