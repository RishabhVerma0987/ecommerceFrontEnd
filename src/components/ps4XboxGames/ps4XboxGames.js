import React from "react";
import "./ps4XboxGames.scss";
function Ps4XboxGames({ platform }) {
  return (
    <div className="workingArea">
      <div className="container">
        <h1>{platform} Games</h1>
        <div className="content">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}
export default Ps4XboxGames;
