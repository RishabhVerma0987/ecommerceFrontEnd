import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar({ color }) {
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
      <div className="navbar" style={{ backgroundColor: color }}>
        <div className="logo">
          <img src={require("../../../assets/logo.svg")} alt="LOGO"></img>
        </div>
        <div className="nav-items">
          <div className="links">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/browse/all">
                <li>Browse</li>
              </Link>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="right-links">
            <ul>
              <li>Login</li>
              <li className="cart">
                <img src={require("../../../assets/cart.svg")} alt="cart"></img>
              </li>
              <li className="wishlist">
                <img
                  src={require("../../../assets/wishlist.svg")}
                  alt="cart"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-mobile" style={{ backgroundColor: color }}>
        <div className="logo">
          <img src={require("../../../assets/logo.svg")} alt="LOGO"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <img src={require("../../../assets/cart.svg")} alt="cart"></img>
            </li>
            <li>
              <img
                src={require("../../../assets/wishlist.svg")}
                alt="cart"
              ></img>
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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/browse/all">
              <li>Browse</li>
            </Link>
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
