import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

import Box from "./Box/Box";
import classes from "./Process.module.css";

const data = [
  {
    title: "Requirement Analysis",
    text: "Understanding business needs, defining technical scope, and drafting comprehensive user stories and specifications.",
    id: "1",
  },
  {
    title: "System Architecture",
    text: "Designing scalable database schemas, selecting the right tech stack, and mapping out API endpoints.",
    id: "2",
  },
  {
    title: "Development & Testing",
    text: "Writing clean, maintainable code across the frontend and backend, paired with rigorous automated and manual testing.",
    id: "3",
  },
  {
    title: "Deployment & Handoff",
    text: "Setting up CI/CD pipelines for seamless deployment, monitoring performance, and delivering comprehensive documentation.",
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
            I have refined this engineering process over years of building full-stack applications, ensuring scalable and reliable delivery you can trust blindly.
          </div>
          <a href="tel:+2348161126466">
            <button>
              <span>Book A FREE call</span>
              <span className={classes.ArrowLeft}>→</span>
            </button>
          </a>
        </div>
        <div className={classes.Left}>
          <motion.div
            className={classes.Boxes}
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
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
