import Button from "../../../UI/Button/Button";
import Typography from "../../../UI/Typography/Typography";
import RatingBox from "../../RatingBox/RatingBox";
import classes from "./MovieDetail.module.scss";
import { generateHeading } from "../../../../Axios/HelperFunctions";
const MovieDetail = (props) => {
  return (
    <div className={classes.DetailBox}>
      <Typography
        type="hero"
        text={generateHeading(props.heading)}
        style={{
          whiteSpace: "pre-line",
          color: props.dark || "#fff",
        }}
      />
      <RatingBox rating={7.6} />
      <Typography
        type="regular"
        text={props.detail}
        style={{
          color: props.dark || "#fff",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      />
      <Button type="trailer">
        <div />
        Watch Trailer
      </Button>
    </div>
  );
};

export default MovieDetail;
