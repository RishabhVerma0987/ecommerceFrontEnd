import React, { useState } from "react";
import "./navbar.scss";
function Navbar() {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    if (open) {
      return "clip open";
    } else {
      return "clip";
    }
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="logo">
          <img src={require("../../assets/logo.svg")} alt="LOGO"></img>
        </div>
        <div className="nav-items">
          <div className="links">
            <ul>
              <li>Home</li>
              <li>Browse</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="right-links">
            <ul>
              <li>Login</li>
              <li className="cart">
                <img src={require("../../assets/cart.svg")} alt="cart"></img>
              </li>
              <li className="wishlist">
                <img
                  src={require("../../assets/wishlist.svg")}
                  alt="cart"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="logo">
          <img src={require("../../assets/logo.svg")} alt="LOGO"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <img src={require("../../assets/cart.svg")} alt="cart"></img>
            </li>
            <li>
              <img src={require("../../assets/wishlist.svg")} alt="cart"></img>
            </li>
            <li
              className="hamburger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              HA
            </li>
          </ul>
          <ul className={openNav()}>
            <li>Home</li>
            <li>Browse</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
