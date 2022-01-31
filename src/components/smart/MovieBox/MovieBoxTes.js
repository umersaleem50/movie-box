import React from "react";
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

class MovieBox extends Component {
  state = {
    isLoaded: false,
    isFavorite: false,
  };

  refImage = React.createRef();

  // generateGenres() {
  //   genreAxios.get("/").then((res) => console.log(res));
  //   return "test";
  // }

  loaded = () => {
    this.setState({ isLoaded: true });
    this.refImage.current.style.opacity = "1";
    this.refImage.current.style.height = "100%";
  };

  render() {
    const styleTypography = {
      marginTop: ".7rem",
      fontSize: "1.3rem",
      color: "var(--color-white-grey)",
      // marginBottom: ".5rem",
    };

    return (
      <figure className={classes.MovieBox} ref={innerRef}>
        <div className={classes.ImgContainer}>
          <Button
            type="logo"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              backgroundColor: this.state.isFavorite ? "#be123c" : "#eeeeee81",
            }}
            clicked={() => {
              console.log(this.state.isFavorite);
              this.setState({ isFavorite: !this.state.isFavorite });
            }}
          />
          {!this.state.isLoaded && <Spinner />}
          <img
            ref={this.refImage}
            src={BASE_URL_IMG_500 + this.props.poster_path || noImage}
            ref={this.refImage}
            alt="Poster"
            onLoad={this.loaded}
          />
        </div>
        <div className={classes.Detail}>
          <Typography
            type="sub-heading"
            style={styleTypography}
            text={this.props.release_date}
          />
          <Typography
            type="sub-heading"
            text={generateHeading(this.props.title)}
            style={{
              marginBottom: ".5rem",
              whiteSpace: "pre-line",
              fontSize: "1.6rem",
            }}
          />
          <RatingBox rating={this.props.vote_average} />
          <Typography
            type="regular"
            text={this.props.genre_ids || "test"}
            style={styleTypography}
          />
        </div>
      </figure>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <MovieBox {...props} innerRef={ref} />
));
