import React from "react";
import "./mygames.scss";
function MyGames() {
  return (
    <div className="mygames">
      <div className="cart-contents">
        <div className="item">
          <div className="left">
            <div className="display-photo">
              <img
                src={require("../../../assets/cyberpunk.jpg")}
                alt="cyberpunk"
              ></img>
            </div>
            <div className="information">
              <h4>Cyberpunk</h4>
              <p>3.5 , By CDKproject</p>
            </div>
          </div>
          <div className="right">$ 35.00 /-</div>
        </div>
      </div>
    </div>
  );
}
export default MyGames;
