import React from "react";
import { Component } from "react";
import { BASE_URL_IMG_500 } from "../../../Axios/Config";
import noImage from "../../../assets/noImg.png";
import RatingBox from "../../dumb/RatingBox/Small/RatingBox--small";
import Typography from "../../UI/Typography/Typography";
import Spinner from "../../UI/Spinner/Spinner";
import classes from "./MovieBox.module.scss";

class MovieBox extends Component {
  state = {
    isLoaded: false,
  };

  refImage = React.createRef();

  generateGenres(data) {
    const genreArr = data.map((genre, i) => genre.name);
    return genreArr.join(", ");
  }

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
      marginBottom: ".5rem",
    };

    return (
      <figure className={classes.MovieBox}>
        <div className={classes.ImgContainer}>
          {!this.state.isLoaded && <Spinner />}
          <img
            ref={this.refImage}
            src={BASE_URL_IMG_500 + this.props.poster_path || noImage}
            ref={this.refImage}
            alt="Poster"
            onLoad={this.loaded}
          />
        </div>

        <Typography
          type="sub-heading"
          style={styleTypography}
          text={this.props.release_date}
        />
        <Typography
          type="sub-heading"
          text={this.props.title}
          style={{ marginBottom: ".5rem" }}
        />
        <RatingBox rating={this.props.vote_average} />
        <Typography type="regular" text={"test"} style={styleTypography} />
      </figure>
    );
  }
}

export default MovieBox;
