import React from "react";
import Aux from "../../UI/Hoc/Aux";
import Overlay from "../../UI/Overlay/Overlay";
import classes from "./VideoBox.module.scss";
const VideoBox = (props) => {
  return (
    <Aux>
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
    </Aux>
  );
};

export default VideoBox;
