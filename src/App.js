import React from "react";
import Homepage from "./components/main/homepage/homepage";
import Trending from "./components/main/trending/trending";
import Latest from "./components/main/latest/latest";
import Ps4XboxGames from "./components/main/ps4XboxGames/ps4XboxGames";
//import Payment from "./components/paymentTesting/paymentTesting";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Homepage />
      <Trending />
      <Latest />
      <Ps4XboxGames platform={"PS4"} />
      <Ps4XboxGames platform={"XBOX"} />
      {/* <Payment /> */}
    </div>
  );
}

export default App;
