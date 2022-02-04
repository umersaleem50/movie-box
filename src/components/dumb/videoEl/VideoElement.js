import React, { useState, useEffect } from "react";
import classes from "./VideoElement.module.scss";
import Typography from "../../UI/Typography/Typography";
import noImage from "../../../assets/noImg.png";
import Spinner from "../../UI/Spinner/Spinner";
import { BASE_URL_IMG_500 } from "../../../Axios/Config";
import { generateHeading } from "../../../Axios/HelperFunctions";
import youtubeVedioAxios from "../../../Axios/youtubeVedioAxios";
const VideoElement = React.forwardRef((props, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [videoData, setVideoData] = useState("");
  const [isError, setIsError] = useState(false);

  // const requestVideoUrl = () => {
  //   youtubeVedioAxios
  //     .get(`/${props.id}/videos`)
  //     .then((res) => setVideoData(res.data.results[0]))
  //     .catch((err) => setIsError(err));
  // };

  // useEffect(() => {
  //   requestVideoUrl();
  // }, []);

  return (
    <div
      className={classes.VideoElement}
      onClick={props.clicked}
      ref={ref}
      // data-urlkey={videoData && videoData.key}
    >
      {isError && <p>Something went wrong!</p>}
      <div className={classes.ImgBox}>
        <img
          src={
            BASE_URL_IMG_500 + props.backdrop_path ||
            props.poster_path ||
            noImage
          }
          alt="Thumbnail"
        />
      </div>
      <Typography
        type="sub-heading"
        text={
          // (videoData && videoData.name) ||
          (props.title && generateHeading(props.title)) ||
          (props.original_title && generateHeading(props.original_title))
        }
        style={{ marginTop: "1rem", whiteSpace: "pre-line" }}
      />
    </div>
  );
});

export default VideoElement;
