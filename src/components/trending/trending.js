import React, { useState } from "react";
import "./trending.scss";
function Trending() {
  return (
    <div className="trending">
      <div className="back-text">
        <img src={require("../../assets/TrendingNow.svg")} alt=" "></img>
      </div>
      <div className="main-box">
        <h1>Trending Now</h1>
        <div className="content">
          <div className="card">
            <div className="image">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              ></img>
            </div>
            <div className="info">
              <h5>Cyber Punk 2077</h5>

              <p>New Big Expansion ,changes the whole world</p>
              <div className="pricing">
                <div className="order-rating">
                  <button>Pre-Order now</button>
                  <p>3.5</p>
                </div>
                <div className="cart-wish">
                  <img
                    className="cart"
                    src={require("../../assets/cart.svg")}
                    alt="cart"
                  ></img>
                  <img
                    src={require("../../assets/wishlist.svg")}
                    alt="cart"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trending;
