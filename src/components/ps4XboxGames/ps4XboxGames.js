import React from "react";
import Card from "../resuables/card";
import "./ps4XboxGames.scss";
function Ps4XboxGames({ platform }) {
  return (
    <div className="workingArea">
      <div className="container">
        <h1>{platform} Games</h1>
        <div className="content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default Ps4XboxGames;
