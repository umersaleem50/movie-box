import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import Typography from "../../UI/Typography/Typography";
import classes from "./Slider.module.scss";

const Slider = (ChildComponent, axios, childProps, parentProps) => {
  class SlideComponent extends Component {
    constructor(props) {
      super(props);
    }
    state = {
      currentIndex: 0,
      childData: [],
      isError: null,
    };

    fetchData() {
      axios
        .get("/")
        .then((res) => this.setState({ childData: res.data.results }))
        .catch((err) => {
          console.log(err.message);
          this.setState({ isError: err });
        });
    }

    componentDidMount() {
      this.fetchData(axios);
    }
    // slideNext() {}

    generateChildData(data) {
      if (this.state.isError) {
        return (
          <Typography
            type={"regular"}
            text={`Something went wrong!, ${this.state.isError.message}`}
            style={{ textAlign: "center", margin: "auto" }}
          />
        );
      }
      if (!this.state.childData || this.state.childData.length === 0)
        return null;

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
          <Typography type="sub-heading" text={parentProps.heading} />
          <Button type="leftArrow" style={{ left: "-6rem" }} />
          <div className={classes.SlideContainer}>
            <div className={classes.Slide}>
              {this.generateChildData(this.state.childData)}
            </div>
          </div>
          <Button type="rightArrow" style={{ right: "-6rem" }} />
        </div>
      );
    }
  }

  return <SlideComponent {...parentProps} />;
};
export default Slider;
