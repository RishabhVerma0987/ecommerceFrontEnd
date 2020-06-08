import React from "react";
import Homepage from "./components/homepage/homepage";
import Trending from "./components/trending/trending";
import Latest from "./components/latest/latest";
import Payment from "./components/paymentTesting/paymentTesting";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Homepage />
      <Trending />
      <Latest />
      <Payment />
    </div>
  );
}

export default App;
