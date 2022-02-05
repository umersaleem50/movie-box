import React, { Component } from "react";
import classes from "./Homepage.module.scss";
import {
  CastParams,
  MOVIE_BOX_PROPS,
  VIDEO_ELEMENT_PROPS,
} from "../../../Axios/Config";
import Auxiliary from "../../UI/Hoc/Auxiliary";
import Header from "../Header/Header";
import MovieBox from "../MovieBox/MovieBox";
import Slider from "../Slider/Slider";
import FeatureSlideAxios from "../../../Axios/featureSlideAxios";
import topRatedSlideAxios from "../../../Axios/topRatedSlideAxios";
import VideoElement from "../../dumb/videoEl/VideoElement";
import Iframe from "react-iframe";
import youtubeVedioAxios from "../../../Axios/youtubeVedioAxios";
import VideoPlayer from "../../dumb/VideoPlayer/VideoPlayer";
import castAxios from "../../../Axios/castAxios";
import CastBox from "../../dumb/CastBox/CastBox";
class Homepage extends Component {
  state = {
    videoUrl: "",

    movieId: "324857",

    isPlayingVideo: false,
    videoYoutubeId: "xU47nhruN-Q",
    castData: [],
  };

  fetchCastData = () => {
    castAxios(this.state.movieId)
      .get("/credits")
      .then((res) => {
        console.log(res.data.cast);
        this.setState({ castData: res.data.cast });
        return res;
        // return res.data.cast;
      });

    // console.log(data);
    // return data;
  };

  componentDidMount() {
    this.fetchCastData();
  }

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
          {Slider(
            VideoElement,
            youtubeVedioAxios(this.state.movieId),
            VIDEO_ELEMENT_PROPS,
            {
              heading: "Exclusive Videos",
            },
            "videos"
          )}
        </section>
        <section className={classes.Section}>
          {Slider(
            CastBox,
            null,
            CastParams,
            {
              heading: "Featured Casts",
            },
            "credits",
            this.state.castData
          )}
        </section>
      </Auxiliary>
    );
  }
}

export default Homepage;
