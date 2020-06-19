import React, { useState } from "react";
import Navbar from "../main/navbar/navbar";
import "./usepage.scss";
import Profile from "./profile/profile";
import MyGame from "./mygames/mygame";
function UserPage() {
  const [nav, setNav] = useState([
    { name: <Profile />, value: true },
    { name: <MyGame />, value: false },
    { name: "Wishlist", value: false },
  ]);

  const changeCompo = (key) => {
    let temp = nav;
    for (let i = 0; i < temp.length; i++) {
      temp[i].value = false;
    }
    temp[key].value = true;
    setNav([...temp]);
  };

  console.log(nav);
  return (
    <React.Fragment>
      <Navbar color={"#1f2227"} />
      <div className="userpage">
        <div className="headers">
          <ul>
            <li
              onClick={() => changeCompo(0)}
              style={{
                color: nav[0].value ? "white" : "",
                borderBottom: nav[0].value
                  ? "1px solid red"
                  : "1px solid transparent",
              }}
            >
              My Profile
            </li>
            <li
              onClick={() => changeCompo(1)}
              style={{
                color: nav[1].value ? "white" : "",
                borderBottom: nav[1].value
                  ? "1px solid red"
                  : "1px solid transparent",
              }}
            >
              My Games
            </li>
            <li
              onClick={() => changeCompo(2)}
              style={{
                color: nav[2].value ? "white" : "",
                borderBottom: nav[2].value
                  ? "1px solid red"
                  : "1px solid transparent",
              }}
            >
              Whislist
            </li>
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
