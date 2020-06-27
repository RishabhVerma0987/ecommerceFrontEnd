import React from "react";
import ReactPlayer from "react-player/youtube";
import "./videoshowcase.scss";
import { SRLWrapper } from "simple-react-lightbox";

function VideoShowCase({ game }) {
  const options = {
    caption: {
      showCaption: false,
    },
  };

  return (
    <div className="video-showcase">
      <div className="main-video">
        <ReactPlayer
          className="react-player"
          url={game?.video[1]}
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          playIcon={
            <img
              src={require("../../../assets/play.svg")}
              style={{ width: "50px", height: "50px" }}
              alt="play"
            ></img>
          }
          light={game?.videoImage[1]}
        />
      </div>

      <div className="other-videos">
        <SRLWrapper options={options}>
          {game?.videoImage.map((el, index) => {
            return (
              <div className="element">
                <img src={el} alt="play"></img>
              </div>
            );
          })}
        </SRLWrapper>
      </div>
    </div>
  );
}

export default VideoShowCase;
