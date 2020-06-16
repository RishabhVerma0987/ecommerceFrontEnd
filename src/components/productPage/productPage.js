import React from "react";
import "./productPage.scss";
import Navbar from "../main/navbar/navbar";
import Background from "../main/background/background";
import VideoShowCase from "./videoShowcase/videoShowcase";
import Details from "./details/details";
function ProductPage() {
  return (
    <React.Fragment>
      <div className="imports">
        <Navbar />
        <Background image={"lounew"} bgColor={"#1F2227"} />
      </div>
      <div className="mobile-imports">
        <Navbar color={"#1F2227"} />
      </div>

      <div className="productPage">
        <VideoShowCase />
        <Details />
      </div>
    </React.Fragment>
  );
}
export default ProductPage;
