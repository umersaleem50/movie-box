import React from "react";
import classes from "./VideoElement.module.scss";
import Typography from "../../UI/Typography/Typography";
import { generateHeading } from "../../../Axios/HelperFunctions";
import YouTube from "react-youtube";

const VideoElement = React.forwardRef((props, ref) => {
  // const [isError, setIsError] = useState(false);

  const videoWidth = () => {
    if (window.innerWidth < 600) {
      return `300`;
    } else return `350`;
  };

  console.log(props.otherKey);
  return (
    <div className={classes.VideoElement} onClick={props.clicked} ref={ref}>
      {/* {isError && <p>Something went wrong!</p>} */}
      <div className={classes.ImgBox}>
        <YouTube
          videoId={props.otherKey}
          opts={{ height: "220", width: videoWidth() }}
        />
      </div>
      <Typography
        type="sub-heading"
        text={
          (props.name && generateHeading(props.name)) ||
          (props.original_title && generateHeading(props.original_title))
        }
        style={{ marginTop: "1rem", whiteSpace: "pre-line" }}
      />
    </div>
  );
});

export default VideoElement;
