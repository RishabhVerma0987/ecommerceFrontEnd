import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopGamesBanner } from "../../../store/actions";
import Navbar from "../navbar/navbar";
import "./homepage.scss";
import Background from "../background/background";
import { Link } from "react-router-dom";
import { AuthMe } from "../../../store/actions/auth";
import { motion } from "framer-motion";
function Homepage() {
  const dispatch = useDispatch();
  const stateTopGames = useSelector((state) => state.bannerTopGamesReducer);
  const [scale, setScale] = useState([1, 0.8, 0.8]);
  useEffect(() => {
    dispatch(fetchTopGamesBanner());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dispatch(AuthMe(false));
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

  console.log(stateTopGames);

  return (
    <React.Fragment>
      <Background image={"banner"} bgColor={"#1a4c31"} />
      <Navbar />
      <div className="homepageBanner">
        <motion.div
          className="content"
          initial={{
            opacity: 0,
            top: -30,
          }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, top: 0 }}
        >
          <h1>
            Browse Best Games <br /> Online
          </h1>

          <p>at very affordable prices!!</p>
          <Link to="/browse/all">
            <button>Browse All</button>
          </Link>
        </motion.div>
        {stateTopGames ? (
          <div className="upcommingGames">
            {stateTopGames.map((game, index) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    top: -30,
                    left: -20,
                  }}
                  transition={{ duration: 0.5 }}
                  animate={{ opacity: 1, top: 0, left: 0 }}
                  className="box"
                  key={index}
                  style={{
                    transform: `scale(${scale[index]})`,
                    opacity: scale[index] === 1 ? 1 : 0.5,
                  }}
                  onMouseEnter={() => changeScale(index)}
                  onMouseLeave={() => {
                    setScale([1, 0.8, 0.8]);
                  }}
                >
                  <Link to={`/product/${game._id}`}>
                    <div className="nameBox">
                      <p>{game.title.replace(/ /g, "")}</p>
                    </div>
                    <img src={game.photo} alt={game.title}></img>
                    <div className="contentBox"></div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}
export default Homepage;
