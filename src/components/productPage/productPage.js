import React from "react";
import "./productPage.scss";
import Navbar from "../main/navbar/navbar";
import Background from "../main/background/background";
import VideoShowCase from "./videoShowcase/videoShowcase";
import Details from "./details/details";
function ProductPage() {
  return (
    <React.Fragment>
      <Navbar />
      <Background image={"lounew"} bgColor={"#1F2227"} />
      <div className="productPage">
        <VideoShowCase />
        <Details />
      </div>
    </React.Fragment>
  );
}
export default ProductPage;
