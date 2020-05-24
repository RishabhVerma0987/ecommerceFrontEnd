import React from "react";
import "./homepage.scss";
function Homepage() {
  return (
    <div className="homepageBanner">
      <div className="content">
        <h1>
          Browse Best Games <br />
          Online
        </h1>
        <p>at very affordable prices!!</p>
        <button>Browse All</button>
      </div>
      <div className="upcommingGames">
        <div className="box">
          <div className="nameBox">
            <p>cyberpunk2077</p>
          </div>
          <img src={require("../../assets/cyberpunk.jpg")}></img>
          <div className="contentBox"></div>
        </div>
        <div
          className="box"
          style={{ transform: "scale(0.9)", opacity: "0.4" }}
        >
          <div className="nameBox">
            <p>cyberpunk2077</p>
          </div>
          <img src={require("../../assets/cyberpunk.jpg")}></img>
          <div className="contentBox"></div>
        </div>
        <div
          className="box"
          style={{ transform: "scale(0.9)", opacity: "0.4" }}
        >
          <div className="nameBox">
            <p>cyberpunk2077</p>
          </div>
          <img src={require("../../assets/cyberpunk.jpg")}></img>
          <div className="contentBox"></div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
