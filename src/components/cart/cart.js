import React, { useState, useEffect } from "react";
import Navbar from "../main/navbar/navbar";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import PaymentTesting from "./paymentTesting/paymentTesting";
import { fetchCartItem } from "../../store/actions/cart";

function Cart() {
  const [showDelete, setDelete] = useState(false);
  const dispatch = useDispatch();
  const games = useSelector((state) => state.cartItemsReducer);

  useEffect(() => {
    dispatch(fetchCartItem());
  }, []);

  const discountedPrice = (price, offer) => {
    let p = parseInt(price);
    let f = parseInt(offer);
    return (p * f) / 100;
  };

  const getPrice = () => {
    let total = 0;

    for (let i = 0; i < games?.length; i++) {
      let price = discountedPrice(
        games[i].product.price,
        games[i].product.offer
      );
      total = total + price;
    }
    return total;
  };

  const priceDiscount = (who) => {
    let total = 0;
    let totalDis = 0;

    if (who === 0) {
      for (let i = 0; i < games?.length; i++) {
        total = total + games[i].product.price;
      }
      return total;
    } else {
      for (let i = 0; i < games?.length; i++) {
        let price = discountedPrice(
          games[i].product.price,
          games[i].product.offer
        );
        totalDis = totalDis + (games[i].product.price - price);
      }
      return totalDis;
    }
  };
  console.log(games);

  return (
    <React.Fragment>
      <Navbar color={"#1f2227"} />
      <div className="my-cart">
        <h1>My Cart</h1>
        <div className="cart-container">
          <div className="cart-contents">
            {games?.map((game) => {
              return (
                <div
                  className="item"
                  onMouseEnter={() => setDelete(true)}
                  onMouseLeave={() => setDelete(false)}
                >
                  <div
                    className="delete"
                    style={{ display: showDelete ? "" : "none" }}
                  >
                    <p>X</p>
                  </div>
                  <div className="left">
                    <div className="display-photo">
                      <img
                        src={game.product.photo}
                        alt={game.product.title}
                      ></img>
                    </div>
                    <div className="information">
                      <h4>{game.product.title}</h4>
                      <p>
                        {game.product.rating} <span>⭐</span> , By{" "}
                        {game.product.company[0]}
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    $ {discountedPrice(game.product.price, game.product.offer)}{" "}
                    /-
                  </div>
                </div>
              );
            })}
          </div>
          <div className="billing">
            <h3>PRICE DETAILS</h3>
            <div className="price-item">
              <p>Price , {games?.length} items</p>
              <p className="money">${priceDiscount(0)}</p>
            </div>
            <div className="discount">
              <p>Discount</p>
              <p className="money">- ${priceDiscount(1)}</p>
            </div>
            <div className="total-amount">
              <p>Total Amount</p>
              <p className="money">${getPrice()}</p>
            </div>
            <div className="pay-button">
              <button className="without">PAY</button>
              <button className="with-amount">
                PAY
                <span style={{ marginLeft: "1rem" }}>${getPrice()}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <PaymentTesting />
    </React.Fragment>
  );
}

export default Cart;
