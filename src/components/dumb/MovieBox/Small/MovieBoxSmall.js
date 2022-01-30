import React, { useState } from "react";
import noImage from "../../../../assets/noImg.png";
import classes from "./MovieBoxSmall.module.scss";
import { BASE_URL_IMG } from "../../../../Axios/Config";
import Typography from "../../../UI/Typography/Typography";
import Spinner from "../../../UI/Spinner/Spinner";
const MovieBoxSmall = (props) => {
  // const BASE_URL = "https://image.tmdb.org/t/p/original";
  // const imgRef = React.createRef();
  const [isLoaded, setIsLoaded] = useState(false);

  const styleHeading = {
    lineHeight: "1",
    marginBottom: ".4rem",
  };
  const styleDate = {
    color: "rgba(0,0,0, .6)",
    fontWeight: "bold",
    marginBottom: ".2rem",
  };

  const styleDetail = {
    color: "rgba(0,0,0, .6)",
  };

  // const loaded = () => {
  //   setIsLoaded(true);
  //   // imgRef.current.style.opacity = "1";
  //   // imgRef.current.style.height = "100%";
  // };

  const generateShortSentence = (sentence) => {
    if (sentence.split(" ").length < 20) return sentence;
    return [...sentence.split(" ")].slice(0, 20).join(" ") + "...";
  };

  return (
    <figure className={classes.MovieBox}>
      <div className={classes.ImgBox}>
        {!isLoaded && <Spinner />}
        <img
          className={classes.Img}
          src={(props.imgURL && BASE_URL_IMG + props.imgURL) || noImage}
          alt="Img"
          // ref={imgRef}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className={classes.Details}>
        <Typography style={styleHeading} type="regular">
          {props.heading}
        </Typography>
        <Typography type="paragraph" style={styleDate}>
          ({props.releaseDate && props.releaseDate.split("-")[0]})
        </Typography>
        <Typography type="paragraph" style={styleDetail}>
          {generateShortSentence(props.details)}
        </Typography>
        {/* <p>{props.type.join(", ")}</p> */}
        {/* <p>{props.details}</p> */}
      </div>
    </figure>
  );
};

export default MovieBoxSmall;
