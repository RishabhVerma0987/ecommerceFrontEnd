import React from "react";
import CartSVG from "./cartSVG";
import WishListSVG from "./wishlistSVG";
import "./card.scss";
function Card() {
  return (
    <div className="productCard">
      <div className="dp">
        <img src={require("../../assets/cyberpunk.jpg")} alt="cyberpunk" />
      </div>
      <div className="info">
        <div className="buy">
          <div className="title">
            <h5>Cyberpunk 2077</h5>
          </div>
          <div className="priceRating">
            <div className="price">
              <p>$ 25.00 /- </p>
            </div>
            <div className="rating">
              <p>3.5 S</p>
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
