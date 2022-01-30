import React, { Component } from "react";
import { MOVIE_BOX_PROPS } from "../../../Axios/Config";
import Aux from "../../UI/Hoc/Aux";
import Header from "../Header/Header";
import MovieBox from "../MovieBox/MovieBox";
import Slider from "../Slider/Slider";
import testMovieBox from "../Slider/testMovieBox";
class Homepage extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <section>{Slider(MovieBox, MOVIE_BOX_PROPS)}</section>
      </Aux>
    );
  }
}

export default Homepage;
