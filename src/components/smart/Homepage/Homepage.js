import React, { Component } from "react";
import classes from "./Homepage.module.scss";
import { MOVIE_BOX_PROPS, VIDEO_ELEMENT_PROPS } from "../../../Axios/Config";
import Auxiliary from "../../UI/Hoc/Auxiliary";
import Header from "../Header/Header";
import MovieBox from "../MovieBox/MovieBox";
import Slider from "../Slider/Slider";
import FeatureSlideAxios from "../../../Axios/featureSlideAxios";
import topRatedSlideAxios from "../../../Axios/topRatedSlideAxios";
import VideoElement from "../../dumb/videoEl/VideoElement";
import exclusiveVideoAxios from "../../../Axios/exclusiveVideoAxios";
import Iframe from "react-iframe";
class Homepage extends Component {
  state = {
    videoUrl: "",
  };

  videoClicked = (key) => {
    this.setState({ videoUrl: key });
  };

  render() {
    return (
      <Auxiliary>
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
        <section className={classes.Section}>
          {Slider(VideoElement, exclusiveVideoAxios, VIDEO_ELEMENT_PROPS, {
            heading: "Exclusive Videos",
          })}
        </section>

        <Iframe
          url={`http://www.youtube.com/embed/xDMP3i36naA`}
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </Auxiliary>
    );
  }
}

export default Homepage;
