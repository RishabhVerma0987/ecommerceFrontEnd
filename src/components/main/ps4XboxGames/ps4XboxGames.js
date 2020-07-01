import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../resuables/card";
import "./ps4xboxgames.scss";
import { fetchPS4Games, fetchXBOXGames } from "../../../store/actions/index";
import Loading from "../resuables/loading";
function Ps4XboxGames({ platform }) {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.ps4GamesReducer);
  const xbox = useSelector((state) => state.xboxGamesReducer);
  useEffect(() => {
    if (platform === "PS4") {
      dispatch(fetchPS4Games());
    } else {
      dispatch(fetchXBOXGames());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="workingArea">
      <div className="container">
        <h1>{platform} Games</h1>
        <div className="content">
          {platform === "PS4" ? (
            games ? (
              games?.map((i) => {
                return (
                  <Card
                    gameName={i.title}
                    imageName={i.photo}
                    price={i.price}
                    rating={i.rating}
                    productId={i._id}
                    got={true}
                  />
                );
              })
            ) : (
              <Loading />
            )
          ) : xbox ? (
            xbox?.map((i) => {
              return (
                <Card
                  gameName={i.title}
                  imageName={i.photo}
                  price={i.price}
                  rating={i.rating}
                  productId={i._id}
                  got={true}
                  platform={i.platform[0]}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
export default Ps4XboxGames;
