import React from "react";
import Background from "./components/background/background";
import Homepage from "./components/homepage/homepage";
import Trending from "./components/trending/trending";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Background image={"banner"} bgColor={"#1a4c31"} />
      <Homepage />
      <Trending />
    </div>
  );
}

export default App;
