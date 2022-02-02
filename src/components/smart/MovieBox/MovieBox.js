import React, { useState } from "react";
import { Component } from "react";
import { BASE_URL_IMG_500 } from "../../../Axios/Config";
import noImage from "../../../assets/noImg.png";
import heartLogo from "../../../assets/logo/heart.png";
import RatingBox from "../../dumb/RatingBox/Small/RatingBox--small";
import Typography from "../../UI/Typography/Typography";
import Spinner from "../../UI/Spinner/Spinner";
import classes from "./MovieBox.module.scss";
import Button from "../../UI/Button/Button";
import genreAxios from "../../../Axios/genersAxios";
import { generateHeading } from "../../../Axios/HelperFunctions";

const MovieBox = React.forwardRef((props, ref) => {
  const [isLoader, setIsLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  // state = {
  //   isLoaded: false,
  //   isFavorite: false,
  // };

  const refImage = React.createRef();

  // generateGenres() {
  //   genreAxios.get("/").then((res) => console.log(res));
  //   return "test";
  // }

  const loaded = () => {
    setIsLoaded(true);
    refImage.current.style.opacity = "1";
    refImage.current.style.height = "100%";
  };

  const styleTypography = {
    marginTop: ".7rem",
    fontSize: "1.3rem",
    color: "var(--color-white-grey)",
    // marginBottom: ".5rem",
  };

  return (
    <figure className={classes.MovieBox} ref={ref}>
      <div className={classes.ImgContainer}>
        <Button
          type="logo"
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            backgroundColor: isFavorite ? "#be123c" : "#eeeeee81",
          }}
          clicked={() => {
            console.log(isFavorite);
            setIsFavorite(!isFavorite);
          }}
        />
        {!isLoader && <Spinner />}
        <img
          ref={refImage}
          src={BASE_URL_IMG_500 + props.poster_path || noImage}
          ref={refImage}
          alt="Poster"
          onLoad={loaded}
        />
      </div>
      <div className={classes.Detail}>
        <Typography
          type="sub-heading"
          style={styleTypography}
          text={props.release_date}
        />
        <Typography
          type="sub-heading"
          text={generateHeading(props.title)}
          style={{
            marginBottom: ".5rem",
            whiteSpace: "pre-line",
            fontSize: "1.6rem",
          }}
        />
        <RatingBox rating={props.vote_average} />
        {/* <Typography
          type="regular"
          text={props.genre_ids || "test"}
          style={styleTypography}
        /> */}
      </div>
    </figure>
  );
});

export default MovieBox;
