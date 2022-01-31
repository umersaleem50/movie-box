import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import Typography from "../../UI/Typography/Typography";
import classes from "./Slider.module.scss";

const Slider = (ChildComponent, axios, childProps, parentProps) => {
  class SlideComponent extends Component {
    constructor(props) {
      super(props);
    }

    childRef = React.createRef();
    slideRef = React.createRef();

    state = {
      currentSlideIndex: 1,
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

    displayNumOfChild() {
      const slideWidth = this.slideRef.current.clientWidth;
      // this.childRef.current.style.marginRight = "5rem";
      const childWidth = this.childRef.current.clientWidth;
      const test = Math.floor(slideWidth / childWidth);
      const numOfChild = test * childWidth;
      const gap = slideWidth - numOfChild;
      this.slideRef.current.style.gridGap = `${
        (Math.abs(gap) / (test - 1) > 70 && 70) || Math.abs(gap) / (test - 1)
      }px`;
      console.log(slideWidth, childWidth, gap, numOfChild, test);
      // const numOfChildWillDisplay = slideWidth / childWidth;
      // const RemainingWidth =
      //   (numOfChildWillDisplay - numOfChildWillDisplay.toFixed(0)) * childWidth;
      // console.log(
      //   slideWidth,
      //   childWidth,
      //   numOfChildWillDisplay,
      //   RemainingWidth
      // );
    }

    componentDidUpdate() {
      this.displayNumOfChild();
    }

    componentDidMount() {
      this.fetchData(axios);
      // this.slideRef.current.style.gridGap = "13rem";
    }
    slideNext() {
      if (this.state.currentSlideIndex >= this.state.childData.length) {
        this.setState({ currentSlideIndex: 1 });
        return;
      }
      this.setState((prevState, prevProp) => ({
        currentSlideIndex: prevState.currentSlideIndex + 1,
      }));
    }

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

        // const MynewCom = ChildComponent;
        return (
          <ChildComponent
            key={i}
            {...props}
            ref={i === 0 ? this.childRef : null}
          />
          // ChildComponent({ ...props }, i === 0 && this.childRef)
        );
      });
    }

    render() {
      return (
        <div className={classes.Slider}>
          <Typography
            type="sub-heading"
            text={parentProps.heading}
            style={{ marginBottom: "3rem" }}
          />
          <div className={classes.MainContent}>
            <Button type="leftArrow" />
            <div className={classes.SlideContainer}>
              <div className={classes.Slide} ref={this.slideRef}>
                {this.generateChildData(this.state.childData)}
              </div>
            </div>
            <Button type="rightArrow" />
          </div>
        </div>
      );
    }
  }

  return <SlideComponent {...parentProps} />;
};
export default Slider;
