import React from "react";
import "./latest.scss";
import Background from "../background/background";
import LatestMobile from "./latest-mobile";
function Latest() {
  return (
    <React.Fragment>
      <div className="latest">
        <Background image={"cyberpunk"} bgColor={"#1f2227"} />
        <div className="latest-content">
          <h1>Latest Edition</h1>
          <div className="card-list">
            <div className="card">
              <h2>cyberpunk</h2>
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              ></img>
            </div>
            <div className="card">
              <h2>cyberpunk</h2>
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              ></img>
            </div>
            <div className="card">
              <h2>cyberpunk</h2>
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              ></img>
            </div>
            <div className="card">
              <h2>cyberpunk</h2>
              <img
                src={require("../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              ></img>
            </div>
          </div>
          <LatestMobile />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Latest;
