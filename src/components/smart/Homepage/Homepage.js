import React, { Component } from "react";
import classes from "./Homepage.module.scss";
import { MOVIE_BOX_PROPS } from "../../../Axios/Config";
import Aux from "../../UI/Hoc/Aux";
import Header from "../Header/Header";
import MovieBox from "../MovieBox/MovieBox";
import Slider from "../Slider/Slider";
import FeatureSlideAxios from "../../../Axios/featureSlideAxios";
import topRatedSlideAxios from "../../../Axios/topRatedSlideAxios";
class Homepage extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <section className={classes.Section}>
          {Slider(MovieBox, FeatureSlideAxios, MOVIE_BOX_PROPS, {
            heading: "Featured Movies",
          })}

          {/* <MovieBoxTes /> */}
        </section>
        <section className={classes.Section}>
          {Slider(MovieBox, topRatedSlideAxios, MOVIE_BOX_PROPS, {
            heading: "Popular Movies",
          })}
        </section>
      </Aux>
    );
  }
}

export default Homepage;
