import React from "react";
import Background from "./components/background/background";
import Homepage from "./components/homepage/homepage";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Background image={"banner"} bgColor={"#1a4c31"} />
      <Homepage />
    </div>
  );
}

export default App;
