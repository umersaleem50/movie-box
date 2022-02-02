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
      currentSlideIndex: 1,
      childData: [],
      isError: false,
    };

    childRef = React.createRef();
    slideRef = React.createRef();

    fetchData() {
      axios
        .get("/")
        .then((res) => this.setState({ childData: res.data.results }))
        .catch((err) => {
          console.log(err.message);
          this.setState({ isError: err });
        });
    }

    onWindowResize = () => {
      console.log(this.slideRef);
      window.addEventListener("resize", this.displayNumOfChild);
    };

    displayNumOfChild = () => {
      if (this.state.isError) return;

      const slideWidth = this.slideRef.current.clientWidth;
      // this.childRef.current.style.marginRight = "5rem";
      const childWidth = this.childRef.current.clientWidth;
      const numberOfChildOnScreen = Math.floor(slideWidth / childWidth);
      const widthOfChilds = numberOfChildOnScreen * childWidth;
      const totalGap = slideWidth - widthOfChilds;
      const singleGap = totalGap / (numberOfChildOnScreen - 1);
      this.slideRef.current.style.gridGap = `${
        singleGap >= 70 ? 50 : singleGap
      }px`;
    };

    componentDidUpdate() {
      this.displayNumOfChild();
      this.onWindowResize();
    }

    componentDidMount() {
      this.fetchData(axios);

      // this.slideRef.current.style.gridGap = "13rem";
    }
    slideNext = () => {
      if (this.state.currentSlideIndex >= this.state.childData.length) {
        this.setState({ currentSlideIndex: 1 });
        return;
      }
      this.setState((prevState, prevProp) => ({
        currentSlideIndex: prevState.currentSlideIndex + 1,
      }));
    };

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
            style={{ marginBottom: "3rem", fontSize: "2.5rem" }}
          />
          <div className={classes.MainContent}>
            {/* <Button type="leftArrow" /> */}
            <div className={classes.SlideContainer}>
              <div className={classes.Slide} ref={this.slideRef}>
                {this.generateChildData(this.state.childData)}
              </div>
            </div>
            {/* <Button type="rightArrow" clicked={this.slideNext} /> */}
          </div>
        </div>
      );
    }
  }

  return <SlideComponent {...parentProps} />;
};
export default Slider;
