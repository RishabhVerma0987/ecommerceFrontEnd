import React from "react";
import Homepage from "./components/main/homepage/homepage";
import Trending from "./components/main/trending/trending";
import Latest from "./components/main/latest/latest";
import Ps4XboxGames from "./components/main/ps4xboxgames/ps4xboxgames";
import BrowseHome from "./components/browse/home/browsehome";
import ProductPage from "./components/productpage/productpage";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/cart";
//import Payment from "./components/paymentTesting/paymentTesting";
import "./App.scss";
import { round } from "lodash";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {/* <Homepage />
            <Trending />
            <Latest />
            <Ps4XboxGames platform={"PS4"} />
            <Ps4XboxGames platform={"XBOX"} /> */}
            <Cart />
          </Route>

          <Route path="/browse/:category">
            <BrowseHome />
          </Route>

          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/register">
            <Register />
          </Route>
        </Switch>
      </Router>
      {/* <Payment /> */}
    </div>
  );
}

export default App;
