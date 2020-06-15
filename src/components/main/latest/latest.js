import React, { useEffect } from "react";
import "./latest.scss";
import Background from "../background/background";
import LatestMobile from "./latest-mobile";
import { useDispatch, useSelector } from "react-redux";
import { latestGames } from "../../../store/actions";
function Latest() {
  const dispatch = useDispatch();
  const latestGamesReducer = useSelector((state) => state.latestGamesReducer);

  useEffect(() => {
    dispatch(latestGames());
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
                <div className="card" key={game.id}>
                  <h2>{game.name}</h2>

                  <img
                    src={require(`../../../assets/${game.name}.jpg`)}
                    alt={game.name}
                  ></img>
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
