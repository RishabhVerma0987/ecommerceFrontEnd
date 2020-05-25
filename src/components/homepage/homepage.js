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

      {stateTopGames ? (
        <div className="upcommingGames">
          {stateTopGames.map((game) => {
            return (
              <div
                className="box"
                key={game.id}
                style={{
                  transform: `scale(${game.scale})`,
                  opacity: game.scale === 1 ? 1 : 0.5,
                }}
              >
                <div className="nameBox">
                  <p>{game.game_name}</p>
                </div>
                <img
                  src={require(`../../assets/${game.image_name}.jpg`)}
                  alt={game.image_name}
                ></img>
                <div className="contentBox"></div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
export default Homepage;
