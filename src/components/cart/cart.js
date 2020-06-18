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
          <div className="billing">
            <h3>PRICE DETAILS</h3>
            <div className="price-item">
              <p>Price , 2 items</p>
              <p className="money">$104</p>
            </div>
            <div className="discount">
              <p>Discount</p>
              <p className="money">
                $52 / <span>50% OFF</span>
              </p>
            </div>
            <div className="total-amount">
              <p>Total Amount</p>
              <p className="money">$52</p>
            </div>
            <div className="pay-button">
              <button className="without">PAY</button>
              <button className="with-amount">
                PAY
                <span style={{ marginLeft: "1rem" }}>$52</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
