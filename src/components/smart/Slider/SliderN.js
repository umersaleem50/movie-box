import React, { Component } from "react";
import { motion } from "framer-motion";
import Typography from "../../UI/Typography/Typography";
import classes from "./SliderN.module.scss";

const SliderN = (
  ChildComponent,
  axios,
  childProps,
  parentProps,
  requestRoute,
  optionalData
) => {
  class SliderComponent extends Component {
    sliderRef = React.createRef();
    sliderwidth = 0;
    state = {
      childData: [],
      isError: null,
      sliderWidth: 0,
    };

    fetchData() {
      if (!axios) {
        this.setState({
          isError: new Error("Please set a fetching mode. Axios is missing!"),
        });
        return null;
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

    // shouldComponentUpdate(nextProps, nextState) {
    //   if (nextState !== this.state || nextProps !== this.props) return true;
    //   return false;
    // }
    // componentWillMount() {
    //   this.fetchData();
    // }

    componentDidUpdate() {
      //   console.log(this.state.sliderWidth);
    }

    componentDidMount() {
      this.setState({
        sliderWidth:
          this.sliderRef.current.scrollWidth -
          this.sliderRef.current.offsetWidth,
      });
    }

    // generateChilds(){
    //     if(optionalData){
    //         this.setState({childData:optionalData});
    //     }else{
    //         this.fetchData();
    //     }

    //     const childElements = [];

    //     this.state.childData.forEach((movie,key)=>{
    //         childElements.push(
    //             <MovieBox
    //         )
    //     })

    // }

    createElementsFromData(dataArr) {
      return dataArr.map((movie, i) => {
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

    generateChildData() {
      //If there is an error
      if (this.state.isError) {
        return (
          <Typography
            type={"regular"}
            text={`Something went wrong!, ${this.state.isError.message}`}
            style={{ textAlign: "center", margin: "auto" }}
          />
        );
      }

      //if user passesd optional data. Optional data have proity on fetch data
      if (optionalData) {
        return this.createElementsFromData(optionalData);
      }

      //if there is no data
      if (!this.state.childData || this.state.childData.length === 0)
        return (
          <Typography type="paragraph">
            No data to render on the screen
          </Typography>
        );

      //otherwise render from fetch
      return this.createElementsFromData(this.state.childData);
    }

    render() {
      return (
        <React.Fragment>
          <Typography
            type="heading"
            text={this.props.heading}
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          />
          <motion.div className={classes.Slider} ref={this.sliderRef}>
            <motion.div
              drag="x"
              whileDrag={{ cursor: "grabbing" }}
              whileTap={{ cursor: "grabbing" }}
              dragConstraints={{ right: 0, left: -this.state.sliderWidth }}
              className={classes.InnerSlider}
            >
              {this.generateChildData(this.state.childData)}
            </motion.div>
          </motion.div>
        </React.Fragment>
      );
    }
  }
  return <SliderComponent {...parentProps} />;
};

export default SliderN;
