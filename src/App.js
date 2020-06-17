import React from "react";
import Homepage from "./components/main/homepage/homepage";
import Trending from "./components/main/trending/trending";
import Latest from "./components/main/latest/latest";
import Ps4XboxGames from "./components/main/ps4xboxgames/ps4xboxgames";
import BrowseHome from "./components/browse/home/browsehome";
import ProductPage from "./components/productpage/productpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Payment from "./components/paymentTesting/paymentTesting";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
            <Trending />
            <Latest />
            <Ps4XboxGames platform={"PS4"} />
            <Ps4XboxGames platform={"XBOX"} />
          </Route>

          <Route path="/browse/:category">
            <BrowseHome />
          </Route>

          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
      {/* <Payment /> */}
    </div>
  );
}

export default App;
