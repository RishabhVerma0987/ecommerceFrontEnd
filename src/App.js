import React from "react";
import Background from "./components/background/background";
import Homepage from "./components/homepage/homepage";
import Trending from "./components/trending/trending";
import Latest from "./components/latest/latest";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Background image={"banner"} bgColor={"#1a4c31"} />
      <Homepage />
      <Trending />
      <Latest />
    </div>
  );
}

export default App;
