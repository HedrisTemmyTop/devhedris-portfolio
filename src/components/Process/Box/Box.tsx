import classes from "../Process.module.css";
interface BoxInterface {
  id: string;
  title: string;
  text: string;
}

const Box = (props: BoxInterface) => {
  return (
    <div className={classes.Box}>
      <h3>
        <span>{props.id}</span>
      </h3>
      <div>
        <div className={classes.Head}>{props.title}</div>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default Box;
