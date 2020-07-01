import React, { useEffect } from "react";
import "./details.scss";
import { useDispatch } from "react-redux";
import { createCart } from "../../../store/actions/cart";
import { useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="details">
      <div className="title">
        <p data-aos="fade-down">{game?.title}</p>
      </div>
      <div className="rating" data-aos="fade-right">
        <p>
          {game?.rating} <span>⭐</span>
        </p>
        <div className="feedback">{game?.company}</div>
      </div>
      <div className="description" data-aos="fade-up">
        <p>{game?.description}</p>
      </div>
      <div className="price" data-aos="fade-up">
        <p>$ {price(game?.price, game?.offer)} /- </p>
        <div className="off">
          <p className="tag">$ {game?.price}</p>
          <p className="style">{game?.offer}% OFF</p>
        </div>
      </div>
      <div className="control" data-aos="fade-down">
        <button className="addtocart" onClick={() => final()}>
          ADD TO CART
        </button>

        <button className="wishlist">WISHLIST</button>
      </div>
    </div>
  );
}

export default Details;
