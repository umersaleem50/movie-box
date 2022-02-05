import React from "react";
import classes from "./Overlay.module.scss";

const Overlay = (props) => {
  return (
    <div
      className={classes.Overlay}
      onClick={props.clicked}
      style={{
        opacity: (props.opacity && props.opacity.toString()) || ".7",
        display: props.show ? "inline-block" : "none",
        zIndex: props.index || "10",
        position: props.isFixed ? "fixed" : "absolute",
      }}
    ></div>
  );
};

export default Overlay;
