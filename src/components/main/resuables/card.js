import React from "react";
import CartSVG from "./cartsvg";

import "./card.scss";
function Card({ gameName, imageName, price, rating, key, got, platform }) {
  const imageHelper = () => {
    switch (platform) {
      case "PS4":
        return <img src={require("../../../assets/ps4.png")} alt="ps4" />;

      case "XBOX":
        return <img src={require("../../../assets/xbox.png")} alt="ps4" />;

      case "PC":
        return <img src={require("../../../assets/win.png")} alt="ps4" />;

      default:
        return <img src={require("../../../assets/ps4.png")} alt="ps4" />;
    }
  };

  return (
    <div className="productCard" key={key}>
      <div className="dp">
        <img
          src={got ? imageName : require(`../../../assets/${imageName}.jpg`)}
          alt={imageName}
        />
      </div>
      <div className="info">
        <div className="buy">
          <div className="title">
            <h5>{gameName}</h5>
          </div>
          <div className="priceRating">
            <div className="price">
              <p>
                $ {price === 0 ? "Free!" : price === -1 ? "Pre-Order" : price}{" "}
                /-{" "}
              </p>
            </div>
            <div className="rating">
              <p>{rating} S</p>
            </div>
          </div>
        </div>
        <div className="cartWish">
          <div className="logoPlatform">{imageHelper()}</div>
          <CartSVG />
        </div>
      </div>
    </div>
  );
}
export default Card;
