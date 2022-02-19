import React from "react";
import classes from "./Footer.module.scss";
import Icon_facebook from "../../../assets/Social/facebook.svg";
import Icon_twitter from "../../../assets/Social/twitter.svg";
import Icon_youtube from "../../../assets/Social/youtube.svg";
import Icon_instagram from "../../../assets/Social/instagram.svg";
import Typography from "../../UI/Typography/Typography";

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Social}>
        <img src={Icon_facebook} alt="facebook" />
        <img src={Icon_twitter} alt="twIcon_twitter" />
        <img src={Icon_youtube} alt="youtube" />
        <img src={Icon_instagram} alt="instagram" />
      </div>
      <div className={classes.Links}>
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy & Policy</a>
        <a href="#">Press Room</a>
      </div>
      <div className="div">
        <Typography
          type="paragraph"
          text="Ⓒ Moviebox design by Adriana Eka & developed by Umar Saleem"
        />
      </div>
    </div>
  );
};

export default Footer;
