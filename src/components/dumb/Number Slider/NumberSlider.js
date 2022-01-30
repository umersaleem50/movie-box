import React, { Component } from "react";
import Typography from "../../UI/Typography/Typography";
import classes from "./NumberSlider.module.scss";

class NumberSlider extends Component {
  state = {
    currentIndex: 1,
  };

  gernerateList = () => {
    return Array(this.props.sliderLength)
      .fill(" ")
      .map((_, i) => {
        return (
          <div
            className={[
              classes.Number,
              this.props.activeNum === i + 1 && classes.Active,
            ].join(" ")}
            key={i}
            onClick={() => {
              this.props.changeIndex(i + 1);
              this.setState({ currentIndex: i + 1 });
            }}
          >
            <Typography type="sub-heading" text={i + 1} />
          </div>
        );
      });
  };

  render() {
    return <div className={classes.Slider}>{this.gernerateList()}</div>;
  }
}
export default NumberSlider;
