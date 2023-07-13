import classes from "../Process.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
interface BoxInterface {
  id: string;
  title: string;
  text: string;
  index: number;
}

const Box = (props: BoxInterface) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInview = useInView(ref, { once: true });
  useEffect(() => {
    if (isInview) mainControls.start("visible");
  }, [isInview]);

  return (
    <motion.div
      className={classes.Box}
      variants={{
        hidden: {
          opacity: 0,
          y: 75,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.1 * props.index + 0.25 }}
      ref={ref}
    >
      <h3>
        <span>{props.id}</span>
      </h3>
      <div>
        <div className={classes.Head}>{props.title}</div>
        <div>{props.text}</div>
      </div>
    </motion.div>
  );
};

export default Box;
