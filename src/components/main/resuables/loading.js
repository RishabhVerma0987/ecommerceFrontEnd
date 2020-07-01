import React from "react";

function Loading() {
  return (
    <img
      src={require("../../../assets/loading.svg")}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "50px",
        height: "50px",
      }}
      alt="loading"
    ></img>
  );
}
export default Loading;
