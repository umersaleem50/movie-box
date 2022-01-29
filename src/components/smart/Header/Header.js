import React, { Component } from "react";
import classes from "./Header.module.scss";
import VideoBox from "../../dumb/VideoBox/VideoBox";
import video from "../../../assets/yourname.mp4";
import video2 from "../../../assets/trailer.mp4";
import video3 from "../../../assets/spiderman.mp4";
import SideMenu from "../../dumb/SideMenu/SideMenu";
import Navigation from "../../dumb/Navigation/Navigation";
import MovieDetail from "../../dumb/MovieDetail/Big/MovieDetail";
import NumberSlider from "../../dumb/Slider/Number Slider/NumberSlider";
class Header extends Component {
  state = {
    movies: [
      {
        src: video2,
        heading: "Arcane: 2021",
        detail:
          "Arcane is an animated action-adventure series created by Christian Linke and Alex Yee for Netflix. Produced by Fortiche Production and Riot Games",
      },
      {
        src: video,
        heading: "Your Name: Koi na kamo",
        detail:
          "Arcane is an animated action-adventure series created by Christian Linke and Alex Yee for Netflix. Produced by Fortiche Production and Riot Games",
      },
      {
        src: video3,
        heading: "Spiderman: Into the spider verse",
        detail:
          "Arcane is an animated action-adventure series created by Christian Linke and Alex Yee for Netflix. Produced by Fortiche Production and Riot Games",
      },
    ],
    currentMovieIndex: 1,
    toggleSideMenu: false,
  };

  changeMovieIndex = (number) => {
    if (!number) return;

    this.setState({ currentMovieIndex: +number });
  };

  toggleSideBar = () => {
    this.setState((prevState, prevProps) => ({
      toggleSideMenu: !prevState.toggleSideMenu,
    }));
    // console.log("clicked", this.state.toggleSideMenu);
  };

  playNextMovie = () => {
    if (this.state.currentMovieIndex === this.state.movies.length) {
      this.setState({ currentMovieIndex: 1 });
      return;
    }
    this.setState((prevState, prevProp) => {
      return { currentMovieIndex: prevState.currentMovieIndex + 1 };
    });
  };

  render() {
    return (
      <header className={classes.Header}>
        <div className={classes.Container}>
          <Navigation
            data={this.state.movies}
            toggleSide={this.toggleSideBar}
          />
          <div className={classes.Details}>
            <MovieDetail
              heading={
                this.state.movies[this.state.currentMovieIndex - 1].heading
              }
              detail={
                this.state.movies[this.state.currentMovieIndex - 1].detail
              }
            />
          </div>
          <NumberSlider
            sliderLength={this.state.movies.length}
            activeNum={this.state.currentMovieIndex}
            changeIndex={this.changeMovieIndex}
          />
        </div>
        <SideMenu
          activeLink="Home"
          toggle={this.state.toggleSideMenu}
          closeSideBar={this.toggleSideBar}
        />
        <VideoBox
          src={this.state.movies[this.state.currentMovieIndex - 1].src}
          background={true}
          overlay={0.5}
          videoEnd={this.playNextMovie}
        />
      </header>
    );
  }
}

export default Header;
