import React, { Component } from "react";
import classes from "./Slider.module.scss";

const Slider = (
  ChildComponent,
  childProps,
  parentProps,
  axios,
  dataToDisplay
) => {
  class SlideComponent extends Component {
    constructor(props) {
      super(props);
    }
    state = {
      currentIndex: 0,
      testData: [
        {
          poster_path: "/TRfZEQSG8C9MNLxi3gs4s8aIwi.jpg",
          adult: false,
          overview:
            "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
          release_date: "2016-08-03",
          genre_ids: [14, 28, 80],
          id: 297761,
          original_title: "Suicide Squad",
          original_language: "en",
          title: "Suicide Squad",
          backdrop_path: "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
          popularity: 48.261451,
          vote_count: 1466,
          video: false,
          vote_average: 5.91,
        },
        {
          poster_path: "/TRfZEQSG8C9MNLxi3gs4s8aIwi.jpg",
          adult: false,
          overview:
            "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
          release_date: "2016-08-03",
          genre_ids: [14, 28, 80],
          id: 297761,
          original_title: "Suicide Squad",
          original_language: "en",
          title: "Suicide Squad",
          backdrop_path: "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
          popularity: 48.261451,
          vote_count: 1466,
          video: false,
          vote_average: 5.91,
        },
      ],
    };

    fetchData(axios) {
      if (!axios) return;
    }

    // slideNext() {}

    generateChildData(data) {
      return data.map((movie, i) => {
        const props = { ...childProps };

        Object.keys(props).forEach((propItem, i) => {
          props[propItem] = movie[propItem];
        });
        return <ChildComponent key={i} {...props} />;
      });
    }

    render() {
      return (
        <div className={classes.Slider}>
          <div className={classes.Slide}>
            {this.generateChildData(this.state.testData)}
          </div>
        </div>
      );
    }
  }

  return <SlideComponent {...parentProps} />;
};
export default Slider;
