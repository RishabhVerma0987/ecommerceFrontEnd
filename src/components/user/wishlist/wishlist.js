import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./wishlist.scss";
import Card from "../../main/resuables/card";
import { ps4Games } from "../../../store/actions/index";
function WishList() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.ps4GamesReducer);
  useEffect(() => {
    dispatch(ps4Games());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="wishlistCompo">
      <div className="workingArea">
        <div className="container">
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
    </div>
  );
}

export default WishList;
