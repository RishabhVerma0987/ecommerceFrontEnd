import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topGamesBanner } from "../../../store/actions";
import Navbar from "../navbar/navbar";
import "./homepage.scss";
import Background from "../background/background";
import { Link } from "react-router-dom";
function Homepage() {
  const dispatch = useDispatch();
  const stateTopGames = useSelector((state) => state.bannerTopGamesReducer);
  const [scale, setScale] = useState([1, 0.8, 0.8]);
  useEffect(() => {
    dispatch(topGamesBanner());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeScale = (id) => {
    let temp = scale;
    temp[id] = 1;
    for (let i = 0; i < scale.length; i++) {
      if (i !== id) {
        temp[i] = 0.8;
      }
    }
    setScale([...temp]);
  };
  return (
    <React.Fragment>
      <Background image={"banner"} bgColor={"#1a4c31"} />
      <Navbar />
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
                    transform: `scale(${scale[game.id - 1]})`,
                    opacity: scale[game.id - 1] === 1 ? 1 : 0.5,
                  }}
                  onMouseEnter={() => changeScale(game.id - 1)}
                  onMouseLeave={() => {
                    setScale([1, 0.8, 0.8]);
                  }}
                >
                  <Link to={`/product/${game.id}`}>
                    <div className="nameBox">
                      <p>{game.game_name}</p>
                    </div>
                    <img
                      src={require(`../../../assets/${game.image_name}.jpg`)}
                      alt={game.image_name}
                    ></img>
                    <div className="contentBox"></div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}
export default Homepage;
