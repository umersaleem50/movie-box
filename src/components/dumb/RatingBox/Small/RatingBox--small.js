import React from "react";
import classes from "./RatingBox--small.module.scss";
import ImdbLogo from "../../../../assets/logo/imdb.png";
import Rotten from "../../../../assets/logo/rotten.png";
import Typography from "../../../UI/Typography/Typography";

const RatingBox = (props) => {
  return (
    <div className={classes.RatingBox}>
      <div className={classes.LogoBox}>
        <img src={ImdbLogo} alt="Imdb Logo" />
        <Typography
          type="regular"
          style={{ color: "#000", fontSize: "1.4rem" }}
          text={props.rating + "/10"}
        />
      </div>
      <div className={classes.LogoBox}>
        <img src={Rotten} alt="Imdb Logo" />
        <Typography
          type="regular"
          style={{ color: "#000", fontSize: "1.4rem" }}
          text={props.rating * 10 + "%"}
        />
      </div>
    </div>
  );
};

export default RatingBox;
