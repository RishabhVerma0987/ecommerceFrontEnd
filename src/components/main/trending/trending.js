import React, { useState } from "react";
import "./trending.scss";
import MainBox from "./resusableCompo/mainbox";
// import { motion, AnimatePresence } from "framer-motion";
function Trending() {
  const [position, setPosition] = useState(["0px", "0px"]);
  const [display, setDisplay] = useState(false);
  const showDiv = (e) => {
    const left = e.clientX + "px";
    const top = e.clientY + "px";
    setPosition([left, top]);
    setDisplay(true);
  };

  return (
    <div className="trending">
      <div className="back-text">
        <img src={require("../../../assets/TrendingNow.svg")} alt=" "></img>
      </div>
      {/* <h2
        onMouseEnter={(e) => showDiv(e)}
        onMouseLeave={() => setDisplay(false)}
        style={{ backgroundColor: "blue", width: "100px" }}
      >
        show
      </h2>
      <AnimatePresence>
        {display && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="divtoshow"
            style={{
              position: "fixed",
              display: display ? "inline" : "none",
              top: position[1],
              left: position[0],
            }}
          >
            <div
              style={{
                backgroundColor: "red",
                width: "300px",
                height: "400px",
              }}
            ></div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <MainBox />
    </div>
  );
}
export default Trending;
