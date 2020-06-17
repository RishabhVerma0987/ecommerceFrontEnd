import React from "react";
import ReactPlayer from "react-player/youtube";
import "./videoshowcase.scss";
function VideoShowCase() {
  return (
    <div className="video-showcase">
      <div className="main-video">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=qPNiIeKMHyg"
          width="100%"
          height="100%"
          controls={true}
          playIcon={
            <img src={require("../../../assets/logo.svg")} alt="play"></img>
          }
          light={require("../../../assets/lounew.jpg")}
        />
      </div>
      <div className="other-videos">
        <div className="element">
          <img src={require("../../../assets/lounew.jpg")} alt="play"></img>
        </div>
        <div className="element">
          <img src={require("../../../assets/lou.jpg")} alt="play"></img>
        </div>
        <div className="element last">
          <img src={require("../../../assets/lastofus.jpg")} alt="play"></img>
        </div>
      </div>
    </div>
  );
}

export default VideoShowCase;
