import React from "react";
import "./navbar.scss";
function Navbar() {
  return (
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
            <li>
              <img src={require("../../assets/cart.svg")} alt="cart"></img>
            </li>
            <li>
              <img src={require("../../assets/wishlist.svg")} alt="cart"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
