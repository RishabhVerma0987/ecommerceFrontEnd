import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../resuables/card";
import "./ps4XboxGames.scss";
import { ps4Games } from "../../store/actions/index";

function Ps4XboxGames({ platform }) {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.ps4GamesReducer);
  useEffect(() => {
    dispatch(ps4Games());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="workingArea">
      <div className="container">
        <h1>{platform} Games</h1>
        <div className="content">
          {games?.map((i) => {
            return (
              <Card
                gameName={i.game_name}
                imageName={i.image_name}
                price={i.price}
                rating={i.rating}
                key={i.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Ps4XboxGames;
