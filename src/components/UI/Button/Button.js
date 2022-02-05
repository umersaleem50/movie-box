import React from "react";

import classes from "./Button.module.scss";

const Button = React.forwardRef((props, ref) => {
  let assignClass = [classes.Button];
  if (props.active) assignClass.push(classes[`${props.type}Active`]);
  switch (props.type) {
    case "text":
      assignClass.push(classes.Text);
      if (props.active) assignClass.push("active");
      break;
    case "round":
      assignClass.push(classes.Round);
      break;
    case "full":
      assignClass.push(classes.Full);
      break;
    case "trailer":
      assignClass.push(classes.Trailer);
      break;
    case "close":
      assignClass.push(classes.Close);
      break;
    case "logo":
      assignClass.push(classes.Logo);
      break;
    case "leftArrow":
      assignClass.push(classes.LeftArrow);
      break;
    case "rightArrow":
      assignClass.push(classes.RightArrow);
      break;
    case "outline":
      assignClass.push(classes.Outline);
      if (props.active) {
        assignClass.push(classes.outlineActive);
      }
      break;

    default:
      break;
  }
  return (
    <button
      ref={ref}
      style={props.style}
      className={assignClass.join(" ")}
      onClick={props.clicked}
    >
      {props.text || props.children}
    </button>
  );
});

export default Button;
