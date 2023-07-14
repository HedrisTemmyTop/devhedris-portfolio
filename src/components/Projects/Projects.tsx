import classes from "./Projects.module.css";
import fenkie from "../../assets/images/fenkei.jpg";
import mandilas from "../../assets/images/mandillasmarket.jpg";
import africommerce from "../../assets/images/africomerce.jpg";
import mapty from "../../assets/images/mapty.jpeg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Box from "./Box/Box";

const data = [
  {
    id: 1,
    image: fenkie,
    link: "https://fenkei.vercel.app/",
    name: "Fenkei",
    buttons: ["REACT", "REDUX", "REACT TESTING", "JEST"],
    content:
      "Fenkei is a blog app platform that allows users to create, publish, and share their written content with the world. It provides a streamlined and user-friendly interface for bloggers to create and publish their posts, as well as tools for managing their content and engaging with their audience.    ",
  },

  {
    id: 2,
    image: mandilas,
    link: "https://www.mandilasmarket.com/",
    name: "Mandilas Market",
    buttons: ["REACT", "REDUX", "TAILWIND"],
    content:
      "            Worked on developing and maintaining an e-commerce website that provided a seamless shopping experience for users. I collaborated with a team of developers and designers to create a modern and user-friendly interface that allowed customers to browse and purchase products with ease.      ",
  },
];
const data2 = [
  {
    id: 1,
    image: africommerce,
    link: "https://africommerce-saas.vercel.app/",
    name: "Africommerce",
    buttons: ["REACT", "NODE JS", "MONGO DB TESTING", "JEST"],
    content:
      "                     An open source e-commerce platform, i made the home page responsive and made the necessary API calls. I created the responsive product paga and also contribute in the user's team    ",
  },
  {
    id: 2,
    image: mapty,
    link: "https://hedris-workout-mapty.netlify.app/",
    name: "Hedris Mapty Workout",
    buttons: ["HTML", "CSS", "JAVASCRIPT"],
    content:
      "                     A workout application that loads users current location on a map and allows them to input their current exercise and user will be able to track their workout with the use of localstorage. I created this the use of object oriented programming in javascript (OOP)      ",
  },
];
const Projects = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInview = useInView(ref, { once: true });
  useEffect(() => {
    if (isInview) mainControls.start("visible");
  }, [isInview]);
  return (
    <section className={classes.Projects} ref={ref} id="projects">
      <div className={classes.Grid}>
        <motion.div
          className={classes.Head}
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
        >
          <h2>
            Selected <span>Projects</span>
          </h2>
          <div className={classes.HeadText}>
            Over the years, I've partnered with startups of all sizes and
            various stages to create some truly unique products. Here are a few
            that I feel were the most challenging yet rewarding.
          </div>
        </motion.div>
        <div>
          {data.map((box) => (
            <Box
              name={box.name}
              link={box.link}
              image={box.image}
              content={box.content}
              buttons={box.buttons}
              key={box.id}
              box={ref}
            />
          ))}
        </div>
      </div>
      <div className={classes.Grid}>
        <div>
          {data2.map((box) => (
            <Box
              name={box.name}
              link={box.link}
              image={box.image}
              content={box.content}
              buttons={box.buttons}
              key={box.id}
              box={ref}
            />
          ))}
        </div>
        <a href="https://hedris-all-projects.netlify.app/" target="_blank">
          <button className={classes.content}>
            <span>View All Projects</span>
            <span className={classes.ArrowLeft}>→</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
