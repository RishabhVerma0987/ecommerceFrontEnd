import React from "react";
import "./background.scss";

function Background({ image, bgColor, got }) {
  return (
    <div className="background">
      <img src={got ? image : require(`../../../assets/${image}.jpg`)} alt="" />

      <div
        className="blackContainer"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
}
export default Background;
