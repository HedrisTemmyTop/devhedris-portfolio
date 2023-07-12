import classes from "../Projects.module.css";
interface BoxInterface {
  link: string;
  image: string;
  buttons: string[];
  name: string;
  content: string;
}

const Box = (props: BoxInterface) => {
  return (
    <div className={classes.Box}>
      <a href={props.link} target="_blank" className={classes.Box}>
        <img src={props.image} alt="project" />
        <div className={classes.Buttons}>
          {props.buttons.map((button) => (
            <button>{button}</button>
          ))}
        </div>
        <div className={classes.Content}>
          <h2>{props.name}</h2>
          <div>{props.content}</div>
          <button className={classes.View}>
            <span>View Website</span>
            <span className={classes.Icon}>⇛</span>
          </button>
        </div>
      </a>
    </div>
  );
};

export default Box;
