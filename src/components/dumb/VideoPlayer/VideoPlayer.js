import React from "react";
import classes from "./VideoPlayer.module.scss";
import YouTube from "react-youtube";

const VideoPlayer = (props) => {
  const winWidth = window.innerWidth - 200;
  const winHeight = window.innerHeight - 200;

  return (
    <div
      className={classes.VideoPlayer}
      onClick={props.closePlayer}
      style={{
        opacity: props.show ? "1" : "0",
        height: props.show ? "100vh" : "0",
      }}
    >
      <div className={classes.mainContent}>
        <YouTube
          className={classes.player}
          videoId={props.videoId}
          opts={{ height: winHeight.toString(), width: winWidth.toString() }}
        />
      </div>
    </div>
  );
};
export default VideoPlayer;
