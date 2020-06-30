import React from "react";
import WishlistSVG from "./wishlistsvg";
import { Link } from "react-router-dom";

import "./card.scss";
function Card({
  gameName,
  imageName,
  price,
  rating,
  productId,
  got,
  platform,
}) {
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
    <div className="productCard" key={productId}>
      <div className="dp">
        <Link to={`/product/${productId}`}>
          <img
            src={got ? imageName : require(`../../../assets/${imageName}.jpg`)}
            alt={imageName}
          />
        </Link>
      </div>
      <div className="info">
        <div className="buy">
          <div className="title">
            <Link to={`/product/${productId}`}>
              <h5>{gameName}</h5>
            </Link>
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
          <WishlistSVG productId={productId} />
        </div>
      </div>
    </div>
  );
}
export default Card;
