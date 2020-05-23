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
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
export default Homepage;
