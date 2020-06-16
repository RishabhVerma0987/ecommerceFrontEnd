import React from "react";
import "./productPage.scss";
import Navbar from "../main/navbar/navbar";
import Background from "../main/background/background";
function ProductPage() {
  return (
    <React.Fragment>
      <Navbar />
      <Background image={"lounew"} bgColor={"#1F2227"} />
      <div className="productPage">
        <div className="video-showcase"></div>
        <div className="details"></div>
      </div>
    </React.Fragment>
  );
}
export default ProductPage;
