import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topGamesBanner } from "../../store/actions";
import "./homepage.scss";
function Homepage() {
  const dispatch = useDispatch();
  const stateTopGames = useSelector((state) => state.bannerTopGamesReducer);

  useEffect(() => {
    dispatch(topGamesBanner());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(stateTopGames);
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
          <img
            src={require("../../assets/cyberpunk.jpg")}
            alt="cyberpunk"
          ></img>
          <div className="contentBox"></div>
        </div>
        <div
          className="box"
          style={{ transform: "scale(0.9)", opacity: "0.4" }}
        >
          <div className="nameBox">
            <p>cyberpunk2077</p>
          </div>
          <img
            src={require("../../assets/cyberpunk.jpg")}
            alt="cyberpunk"
          ></img>
          <div className="contentBox"></div>
        </div>
        <div
          className="box"
          style={{ transform: "scale(0.9)", opacity: "0.4" }}
        >
          <div className="nameBox">
            <p>cyberpunk2077</p>
          </div>
          <img
            src={require("../../assets/cyberpunk.jpg")}
            alt="cyberpunk"
          ></img>
          <div className="contentBox"></div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
