import React from "react";
import CartSVG from "../resuables/cartSVG";
import WishListSVG from "../resuables/wishlistSVG";
import "./ps4XboxGames.scss";
function Ps4XboxGames({ platform }) {
  return (
    <div className="workingArea">
      <div className="container">
        <h1>{platform} Games</h1>
        <div className="content">
          <div className="card">
            <div className="dp">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              />
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
          <div className="card">
            <div className="dp">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              />
            </div>
            <div className="info">
              <div className="buy"></div>
              <div className="cartWish"></div>
            </div>
          </div>
          <div className="card">
            <div className="dp">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              />
            </div>
            <div className="info">
              <div className="buy"></div>
              <div className="cartWish"></div>
            </div>
          </div>
          <div className="card">
            <div className="dp">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              />
            </div>
            <div className="info">
              <div className="buy"></div>
              <div className="cartWish"></div>
            </div>
          </div>
          <div className="card">
            <div className="dp">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              />
            </div>
            <div className="info">
              <div className="buy"></div>
              <div className="cartWish"></div>
            </div>
          </div>
          <div className="card">
            <div className="dp">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              />
            </div>
            <div className="info">
              <div className="buy"></div>
              <div className="cartWish"></div>
            </div>
          </div>

          <div className="card">
            <div className="dp">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              />
            </div>
            <div className="info">
              <div className="buy"></div>
              <div className="cartWish"></div>
            </div>
          </div>
          <div className="card">
            <div className="dp">
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              />
            </div>
            <div className="info">
              <div className="buy"></div>
              <div className="cartWish"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ps4XboxGames;
