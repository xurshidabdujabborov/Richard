import React, { useRef } from "react";
import videos from "../../assets/video/eminem.mp4";
import past from "../../assets/img/past.png"
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./Video.css";
import { useState } from "react";

function Video(props) {
  const [play, setPlay] = useState(false);
  const videoIcon = useRef();

  return (
    <div className="video">
      <video src={videos} poster={past} ref={videoIcon}></video>
      <div className="texts">
        <Container>
          <Grid container spacing={4}>
            <Grid items md={12}>
              {play ? (
                <div
                  className="videoPlayerIcons"
                  onClick={() => {
                    videoIcon.current.pause();
                    setPlay(false);
                  }}
                >
                  <PauseIcon />
                </div>
              ) : (
                <div
                  className="videoPlayerIcons"
                  onClick={() => {
                    videoIcon.current.play();
                    setPlay(true);
                  }}
                >
                  <PlayArrowIcon />
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Video;
