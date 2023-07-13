import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

import Box from "./Box/Box";
import classes from "./Process.module.css";

const data = [
  {
    title: "User Stories",
    text: "Description of the app's functionalites from the user's perspective    ",
    id: "1",
  },
  {
    title: "Feature",
    text: "Gather the features that needs to be included in the application from the user stories",
    id: "2",
  },
  {
    title: "Flowchart & Architecture    ",
    text: "Construct a software architecture based on the functionalities that needs to be included in the app.    ",
    id: "3",
  },
  {
    title: "Final hand off",
    text: "Leverage the power of software architect to provide the flowchart and power product design to render a good layout.",
    id: "4",
  },
];

const Process = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInview = useInView(ref, { once: true });
  useEffect(() => {
    if (isInview) mainControls.start("visible");
  }, [isInview]);
  return (
    <section className={classes.Process} ref={ref}>
      <div className={classes.Container}>
        <div className={classes.Right}>
          <h2>
            My process that helps my clients to <span>2X their revenue</span>
          </h2>
          <div className={classes.Content}>
            I discover this process working more than 10+ in the design industry
            that why you can trust blindly
          </div>
          <button>
            <span>Book A FREE call</span>
            <span className={classes.ArrowLeft}>→</span>
          </button>
        </div>
        <div className={classes.Left}>
          <motion.div
            className={classes.Boxes}
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
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {data.map((data) => (
              <Box
                title={data.title}
                id={data.id}
                key={data.id}
                text={data.text}
                index={Number(data.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
