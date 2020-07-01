import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import "./videoshowcase.scss";
import { SRLWrapper } from "simple-react-lightbox";
import AOS from "aos";
import "aos/dist/aos.css";
function VideoShowCase({ game }) {
  const options = {
    caption: {
      showCaption: false,
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="video-showcase">
      <div className="main-video">
        <ReactPlayer
          data-aos="zoom-in"
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
              <div className="element" data-aos="zoom-in-right">
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
