import React from "react";
import CartSVG from "./cartSVG";
import WishListSVG from "./wishlistSVG";
import "./card.scss";
function Card({ gameName, imageName, price, rating, key }) {
  return (
    <div className="productCard">
      <div className="dp">
        <img src={require(`../../assets/${imageName}.jpg`)} alt={imageName} />
      </div>
      <div className="info">
        <div className="buy">
          <div className="title">
            <h5>{gameName}</h5>
          </div>
          <div className="priceRating">
            <div className="price">
              <p>$ {price} /- </p>
            </div>
            <div className="rating">
              <p>{rating} S</p>
            </div>
          </div>
        </div>
        <div className="cartWish">
          <WishListSVG />
          <CartSVG />
        </div>
      </div>
    </div>
  );
}
export default Card;
