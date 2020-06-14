import React from "react";
import Homepage from "./components/homepage/homepage";
import Trending from "./components/trending/trending";
import Latest from "./components/latest/latest";
import Ps4XboxGames from "./components/ps4XboxGames/ps4XboxGames";
//import Payment from "./components/paymentTesting/paymentTesting";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Homepage />
      <Trending />
      <Latest />
      <Ps4XboxGames platform={"PS4"} />
      {/* <Ps4XboxGames platform={"XBOX"} /> */}
      {/* <Payment /> */}
    </div>
  );
}

export default App;
