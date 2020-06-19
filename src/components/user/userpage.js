import React, { useState } from "react";
import Navbar from "../main/navbar/navbar";
import "./usepage.scss";
import Profile from "./profile/profile";
function UserPage() {
  const [nav, setNav] = useState([true, false, false]);

  const changeCompo = (key) => {
    let temp = nav;
    for (let i = 0; i < temp.length; i++) {
      temp[i] = false;
    }
    temp[key] = true;
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
                color: nav[0] ? "white" : "",
                borderBottom: nav[0]
                  ? "1px solid red"
                  : "1px solid transparent",
              }}
            >
              My Profile
            </li>
            <li
              onClick={() => changeCompo(1)}
              style={{
                color: nav[1] ? "white" : "",
                borderBottom: nav[1]
                  ? "1px solid red"
                  : "1px solid transparent",
              }}
            >
              My Games
            </li>
            <li
              onClick={() => changeCompo(2)}
              style={{
                color: nav[2] ? "white" : "",
                borderBottom: nav[2]
                  ? "1px solid red"
                  : "1px solid transparent",
              }}
            >
              Whislist
            </li>
          </ul>
        </div>
        <div className="userContainer">
          <Profile />
        </div>
      </div>
    </React.Fragment>
  );
}
export default UserPage;
