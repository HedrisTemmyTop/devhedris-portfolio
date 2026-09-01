import classes from "../Services.module.css";
import { LazyImage } from "../../LazyImage/LazyImage";

interface BoxInterface {
  name: string;
  image: string;
  text: string;
}

const Box = (props: BoxInterface) => {
  return (
    <div className={classes.Box}>
      <div className={classes.BoxGradient}></div>
      <LazyImage src={props.image} alt="box" />
      <h2 className={classes.BoxName}> {props.name}</h2>
      <div>{props.text}</div>
    </div>
  );
};

export default Box;
