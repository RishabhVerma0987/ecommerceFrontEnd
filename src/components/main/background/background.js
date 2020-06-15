import React from "react";
import "./background.scss";
function Background({ image, bgColor }) {
  return (
    <div className="background">
      <img src={require(`../../../assets/${image}.jpg`)} alt="" />
      <div
        className="blackContainer"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
}
export default Background;
