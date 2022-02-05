import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import Typography from "../../UI/Typography/Typography";
import classes from "./Slider.module.scss";

const Slider = (
  ChildComponent,
  axios,
  childProps,
  parentProps,
  requestRoute,
  optionalData
) => {
  class SlideComponent extends Component {
    constructor(props) {
      super(props);
    }
    state = {
      currentSlideIndex: 1,
      childData: [],
      isError: false,
    };

    /*
    childRef is for any Child component passed in Slider function,
    To then make Slider interactive based on Childcomponent Ref
    */
    childRef = React.createRef();
    slideRef = React.createRef();

    /*
    THIS FUNCTION WILL FETCH DATA FROM SERVER BASED ON AXIOS ELEMENT AND PROVIDE
    DATA TO USE AS PROPS FOR CHILD ELEMENTS. 
    AXIOS OBJECT COULD BE DIFFRENT FOR REQUESTING FROM DIFFERNT END POINT.
    */

    fetchData() {
      if (!axios) {
        this.setState({ childData: optionalData });
        return;
      }
      axios
        .get(`/${requestRoute || ""}`)
        .then((res) => {
          console.log(res);
          this.setState({ childData: res.data.results });
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ isError: err });
        });
    }

    /*
    THIS FUNCTION WILL BE TRIGGER EVERYTIME IF THE WINDOWS RESIZE,
    TO MAKE SLIDER COMPONENT RESPONSIVE.
    */

    onWindowResize = () => {
      console.log(this.slideRef);
      window.addEventListener("resize", this.displayNumOfChild);
    };

    /*
    THIS FUNCTION WILL DECIDE THE NUMBER OF CHILD ELEMENTS TO BE DISPLAYED ON 
    SCREEN FOR RESPONSIVENESS AS EVERY CHILD ELEMENT COULD BE DIFFRENT
    */

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
      if (optionalData) return;
      this.fetchData(axios);

      // this.slideRef.current.style.gridGap = "13rem";
    }

    /*
    THIS FUNCTION WILL SLIDIND THE SLIDE IN SLIDER COMPONENT
    */

    // slideNext = () => {
    //   if (this.state.currentSlideIndex >= this.state.childData.length) {
    //     this.setState({ currentSlideIndex: 1 });
    //     return;
    //   }
    //   this.setState((prevState, prevProp) => ({
    //     currentSlideIndex: prevState.currentSlideIndex + 1,
    //   }));
    // };

    /*
    THIS FUNCTION WILL RENDER THE CHILD ELEMENTS BASED ON FATCHED DATA
    */
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

      if (optionalData) {
        return optionalData.map((movie, i) => {
          const props = { ...childProps };

          Object.keys(props).forEach((propItem, i) => {
            if (movie.key) {
              props.otherKey = movie.key;
              return;
            }
            props[propItem] = movie[propItem];
          });
          return (
            <ChildComponent
              key={i}
              {...props}
              ref={i === 0 ? this.childRef : null}
            />
          );
        });
      }

      if (!this.state.childData || this.state.childData.length === 0)
        return null;

      return data.map((movie, i) => {
        const props = { ...childProps };

        Object.keys(props).forEach((propItem, i) => {
          if (movie.key) {
            props.otherKey = movie.key;
            return;
          }
          props[propItem] = movie[propItem];
        });
        return (
          <ChildComponent
            key={i}
            {...props}
            ref={i === 0 ? this.childRef : null}
          />
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
