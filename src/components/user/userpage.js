import React, { useState, useEffect } from "react";
import Navbar from "../main/navbar/navbar";
import "./usepage.scss";
import Profile from "./profile/profile";
import MyGame from "./mygames/mygame";
import Wishlist from "./wishlist/wishlist";
import { Link } from "react-router-dom";
function UserPage(props) {
  useEffect(() => {
    // window.location.reload(false);
    let temp = nav;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].key === props.match.params.header.toString()) {
        temp[i].value = true;
      } else {
        temp[i].value = false;
      }
    }
    setNav([...temp]);
  }, []);

  const [nav, setNav] = useState([
    { name: <Profile />, value: false, key: "profile" },
    { name: <MyGame />, value: false, key: "mygames" },
    { name: <Wishlist />, value: false, key: "wishlist" },
  ]);

  // const changeCompo = (key) => {
  //   let temp = nav;
  //   for (let i = 0; i < temp.length; i++) {
  //     temp[i].value = false;
  //   }
  //   temp[key].value = true;
  //   setNav([...temp]);
  // };

  return (
    <React.Fragment>
      <Navbar color={"#1f2227"} />
      <div className="userpage">
        <div className="headers">
          <ul>
            <Link to="profile">
              <li
                style={{
                  color: nav[0].value ? "white" : "",
                  borderBottom: nav[0].value
                    ? "1px solid red"
                    : "1px solid transparent",
                }}
              >
                My Profile
              </li>
            </Link>
            <Link to="mygames">
              <li
                style={{
                  color: nav[1].value ? "white" : "",
                  borderBottom: nav[1].value
                    ? "1px solid red"
                    : "1px solid transparent",
                }}
              >
                My Games
              </li>
            </Link>
            <Link to="wishlist">
              <li
                style={{
                  color: nav[2].value ? "white" : "",
                  borderBottom: nav[2].value
                    ? "1px solid red"
                    : "1px solid transparent",
                }}
              >
                Whislist
              </li>
            </Link>
          </ul>
        </div>
        <div className="userContainer">
          {nav.map((i) => {
            if (i.value === true) {
              return i.name;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default UserPage;
