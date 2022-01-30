import { Component } from "react";
import { BASE_URL_IMG_500 } from "../../../Axios/Config";
import noImage from "../../../assets/noImg.png";
import RatingBox from "../../dumb/RatingBox/RatingBox";
import Typography from "../../UI/Typography/Typography";
import classes from "./MovieBox.module.scss";

class MovieBox extends Component {
  generateGenres(data) {
    const genreArr = data.map((genre, i) => genre.name);
    return genreArr.join(", ");
  }

  render() {
    return (
      <figure className={classes.MovieBox}>
        <div className={classes.ImgContainer}>
          <img
            src={BASE_URL_IMG_500 + this.props.poster_path || noImage}
            alt="Poster"
          />
        </div>

        <Typography
          type="sub-heading"
          style={{ marginTop: ".5rem", fontSize: "1.2rem" }}
          text={this.props.release_date}
        />
        <Typography type="sub-heading" text={this.props.title} />
        <RatingBox rating={this.props.vote_average} />
        <Typography type="paragraph" text={"test"} />
      </figure>
    );
  }
}

export default MovieBox;
