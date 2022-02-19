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
import Footer from "../../dumb/footer/Footer";
import SliderN from "../Slider/SliderN";
class Homepage extends Component {
  state = {
    videoUrl: "",

    movieId: "324857",

    isPlayingVideo: false,
    videoYoutubeId: "xU47nhruN-Q",
    castData: {
      data: [],
      error: null,
    },
    featureDate: {
      data: [],
      error: null,
    },
    exclusiveData: {
      data: [],
      error: null,
    },
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

  fetchFeatureData = () => {
    const result = {
      data: [],
      error: null,
    };
    FeatureSlideAxios.get("/")
      .then((res) => {
        result.data = res.data.results;
        this.setState({ featureDate: { data: res.data.results, error: null } });
      })
      .catch((err) => (result.error = err));

    console.log(result);
    return result;
  };

  fetchExclusiveData = () => {
    const result = {
      data: [],
      error: null,
    };
    topRatedSlideAxios
      .get("/")
      .then((res) => {
        result.data = res.data.results;
      })
      .catch((err) => {
        result.error = err;
      });

    return result;
  };

  fetchAllDataAndSetstate = () => {
    const castData = this.fetchCastData();
    const featureDate = this.fetchFeatureData();
    const exclusiveData = this.fetchExclusiveData();
    this.setState({
      castData: castData,
      featureDate: featureDate,
      exclusiveData: exclusiveData,
    });
  };

  componentDidMount() {
    // this.fetchCastData();
    // this.fetchFeatureData();
    this.fetchAllDataAndSetstate();
    console.log(this.state);
  }

  render() {
    return (
      <Auxiliary>
        <Header />
        <section className={classes.Section}>
          {/* {Slider(MovieBox, FeatureSlideAxios, MOVIE_BOX_PROPS, {
            heading: "Featured Movies",
          })} */}
          {SliderN(
            MovieBox,
            null,
            MOVIE_BOX_PROPS,
            {
              heading: "Featured Movies",
            },
            "",
            this.state.featureDate.data.slice(0, 8)
          )}

          {/* <MovieBoxTes /> */}
        </section>
        {/* <section className={classes.Section}>
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
        </section> */}
        <Footer />
      </Auxiliary>
    );
  }
}

export default Homepage;
