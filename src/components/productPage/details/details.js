import React from "react";
import "./details.scss";
function Details() {
  return (
    <div className="details">
      <div className="title">
        <p>Last of Us 2</p>
      </div>
      <div className="rating">
        <p>
          4.5 <span>⭐</span>
        </p>
        <div className="feedback">positive</div>
      </div>
      <div className="description">
        <p>
          The Last of Us Part II takes place five years after the events of the
          first game and about 25 years after the outbreak of the Cordyceps
          Brain .
        </p>
      </div>
      <div className="price">
        <p>$ 25.00 /- </p>
        <div className="off">
          <p className="tag">$ 50.00</p>
          <p className="style">50% OFF</p>
        </div>
      </div>
      <div className="control">
        <button className="addtocart">ADD TO CART</button>
        <button className="wishlist">WISHLIST</button>
      </div>
    </div>
  );
}

export default Details;
