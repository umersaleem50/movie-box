import React, { useState } from "react";
import { BASE_URL_IMG_500 } from "../../../Axios/Config";
import Typography from "../../UI/Typography/Typography";
import classes from "./CastBox.module.scss";
import noImage from "../../../assets/noImg.png";
import Spinner from "../../UI/Spinner/Spinner";

const CastBox = React.forwardRef((props, outerRef) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={classes.CastBox} ref={outerRef}>
      <div className={classes.ImgBox}>
        {isLoaded ? null : <Spinner />}
        <img
          src={
            (props.profile_path && BASE_URL_IMG_500 + props.profile_path) ||
            noImage
          }
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? "1" : "0",
            height: isLoaded ? "auto" : "0",
          }}
          alt="Cast Image"
        />
      </div>
      <Typography type="sub-heading" text={props.name} />
    </div>
  );
});

export default CastBox;
