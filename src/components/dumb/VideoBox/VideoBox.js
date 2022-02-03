import React from "react";
import Auxiliary from "../../UI/Hoc/Auxiliary";
import Overlay from "../../UI/Overlay/Overlay";
import classes from "./VideoBox.module.scss";
const VideoBox = (props) => {
  return (
    <Auxiliary>
      <Overlay show opacity={0.3} />
      <video
        className={classes.VideoBox}
        src={props.src}
        muted={props.background}
        autoPlay={props.background}
        controls={!props.background}
        // loop={props.background}
        onEnded={props.videoEnd}
      />
    </Auxiliary>
  );
};

export default VideoBox;
