import React, { useEffect } from "react";
import "./latest.scss";
import Background from "../background/background";
import LatestMobile from "./latest-mobile";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestGamesBanner } from "../../../store/actions";
function Latest() {
  const dispatch = useDispatch();
  const latestGamesReducer = useSelector((state) => state.latestGamesReducer);

  useEffect(() => {
    dispatch(fetchLatestGamesBanner());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <div className="latest">
        <div id="preloadedImages"></div>
        <Background image={"cyberpunk"} bgColor={"#1f2227"} />
        <div className="latest-content">
          <h1>Latest Edition</h1>
          <div className="card-list">
            {latestGamesReducer?.map((game) => {
              return (
                <div className="card" key={game._id}>
                  <h2>{game.title.replace(/ /g, "")}</h2>

                  <img src={game.photo} alt={game.title}></img>
                </div>
              );
            })}
          </div>
          <LatestMobile data={latestGamesReducer} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Latest;
