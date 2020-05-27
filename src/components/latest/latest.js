import React from "react";
import "./latest.scss";
import Background from "../background/background";
function Latest() {
  return (
    <React.Fragment>
      <div className="latest">
        <Background image={"cyberpunk"} bgColor={"#1f2227"} />
        <div className="latest-content">
          <h1>Latest Edition</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Latest;
