import React, { Component } from "react";
import { MOVIE_BOX_PROPS } from "../../../Axios/Config";
import Aux from "../../UI/Hoc/Aux";
import Header from "../Header/Header";
import MovieBox from "../MovieBox/MovieBox";
import Slider from "../Slider/Slider";
import FeatureSlideAxios from "../../../Axios/featureSlideAxios";

class Homepage extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <section>
          {Slider(MovieBox, FeatureSlideAxios, MOVIE_BOX_PROPS, {
            heading: "Featured Movies",
          })}
        </section>
      </Aux>
    );
  }
}

export default Homepage;
