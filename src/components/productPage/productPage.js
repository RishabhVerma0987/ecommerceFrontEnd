import React from "react";
import "./productPage.scss";
import Navbar from "../main/navbar/navbar";
import Background from "../main/background/background";
import ReactPlayer from "react-player/youtube";
function ProductPage() {
  const icon = () => {
    return <img src={require("../../assets/logo.svg")} alt="play"></img>;
  };
  return (
    <React.Fragment>
      <Navbar />
      <Background image={"lounew"} bgColor={"#1F2227"} />
      <div className="productPage">
        <div className="video-showcase">
          <div className="main-video">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=qPNiIeKMHyg"
              width="100%"
              height="100%"
              controls={true}
              playIcon={
                <img src={require("../../assets/logo.svg")} alt="play"></img>
              }
              light={require("../../assets/lounew.jpg")}
            />
          </div>
          <div className="other-videos">
            <div className="element">
              <img src={require("../../assets/lounew.jpg")} alt="play"></img>
            </div>
            <div className="element">
              <img src={require("../../assets/lou.jpg")} alt="play"></img>
            </div>
            <div className="element last">
              <img src={require("../../assets/lastofus.jpg")} alt="play"></img>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="title">
            <p>Last of Us 2</p>
          </div>
          <div className="rating">
            <p>
              4.5 <span>⭐</span>
            </p>
            <div className="feedback">positive</div>
          </div>
          <div className="description">
            <p>
              The Last of Us Part II takes place five years after the events of
              the first game and about 25 years after the outbreak of the
              Cordyceps Brain .
            </p>
          </div>
          <div className="price">
            <p>$ 25.00 /- </p>
            <div className="off">
              <p className="tag">$ 50.00</p>
              <p className="style">50% OFF</p>
            </div>
          </div>
          <div className="control">
            <button className="addtocart">ADD TO CART</button>
            <button className="wishlist">WISHLIST</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ProductPage;
