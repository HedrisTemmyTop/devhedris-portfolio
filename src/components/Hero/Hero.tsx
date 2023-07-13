import classes from "./Hero.module.css";
import myImg from "../../assets/images/myimage.jpeg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
const Hero = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInview = useInView(ref, { once: true });
  useEffect(() => {
    if (isInview) mainControls.start("visible");
  }, [isInview]);
  return (
    <main>
      <div className={classes.HeroLeft}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -75,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={classes.HeroHead}
        >
          <span>Frontend Engineer</span>
          <span> crafting products that people love</span>
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 75,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={classes.HeroText}
        >
          I'm Hedris Temitope— a junior developer who works with startups
          looking to push creative boundaries and create unique user experiences
          with high Level experience in web design and development knowledge,
          producing quality work
        </motion.div>
        <motion.div
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
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <button>
            <span>Book A FREE call</span>
            <span className="ArrowLeft">→</span>
          </button>
        </motion.div>
      </div>
      <div className={classes.HeroRight} ref={ref}>
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
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <img src={myImg} alt="user" />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
