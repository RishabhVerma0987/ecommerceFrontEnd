import React, { useState } from "react";
import Navbar from "../main/navbar/navbar";
import "./cart.scss";
function Cart() {
  const [showDelete, setDelete] = useState(false);
  return (
    <React.Fragment>
      <Navbar color={"#1f2227"} />
      <div className="my-cart">
        <h1>My Cart</h1>
        <div className="cart-container">
          <div className="cart-contents">
            <div
              className="item"
              onMouseEnter={() => setDelete(true)}
              onMouseLeave={() => setDelete(false)}
            >
              <div
                className="delete"
                style={{ display: showDelete ? "" : "none" }}
              >
                <p>X</p>
              </div>
              <div className="left">
                <div className="display-photo">
                  <img
                    src={require("../../assets/cyberpunk.jpg")}
                    alt="cyberpunk"
                  ></img>
                </div>
                <div className="information">
                  <h4>Cyberpunk</h4>
                  <p>3.5 , By CDKproject</p>
                </div>
              </div>
              <div className="right">$ 35.00 /-</div>
            </div>
          </div>
          <div className="billing"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
