import classes from "../Projects.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
interface BoxInterface {
  link: string;
  image: string;
  buttons: string[];
  name: string;
  content: string;
  box: any;
}

const Box = (props: BoxInterface) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInview = useInView(ref, { once: true });
  useEffect(() => {
    if (isInview) mainControls.start("visible");
  }, [isInview, mainControls]);
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 200,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.25, delay: 0.1 }}
      className={classes.Box}
      ref={ref}
    >
      <a href={props.link} target="_blank" className={classes.Box}>
        <img src={props.image} alt="project" />
        <div className={classes.Buttons}>
          {props.buttons.map((button) => (
            <button key={button}>{button}</button>
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
    </motion.div>
  );
};

export default Box;
