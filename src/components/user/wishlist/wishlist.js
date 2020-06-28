import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./wishlist.scss";
import Card from "../../main/resuables/card";
import { fetchCartItem } from "../../../store/actions/cart";
function WishList() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.cartItemsReducer);
  useEffect(() => {
    dispatch(fetchCartItem(true));
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
                  gameName={i.product.title}
                  imageName={i.product.photo}
                  price={i.product.price}
                  rating={i.product.rating}
                  key={i.id}
                  got={true}
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
