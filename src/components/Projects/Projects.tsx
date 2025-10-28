import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import africommerce from "../../assets/images/africomerce.jpg";
import fenkie from "../../assets/images/fenkei.jpg";
import mandilas from "../../assets/images/mandillasmarket.jpg";
import taaskly from "../../assets/images/og2.png";
import Box from "./Box/Box";
import classes from "./Projects.module.css";
import clapmi from "../../assets/images/clapmi.png";

const data = [
  {
    id: 1,
    image: clapmi,
    link: "https://clapmi.com/",
    name: "Clapmi",
    buttons: ["NUXTJS", "TYPESCRIPT", "PINIA", "TAILWIND CSS"],
    content:
      "Clapmi is the revolutionary competitive livestreaming platform where creators showcase their skills and both creators and fans win together.",
  },
  {
    id: 2,
    image: africommerce,
    link: "https://africommerce-saas.vercel.app/",
    name: "Africommerce",
    buttons: ["REACT", "NODE JS", "MONGO DB TESTING", "JEST"],
    content:
      "                     An open source e-commerce platform, i made the home page responsive and made the necessary API calls. I created the responsive product paga and also contribute in the user's team    ",
  },
];
const data2 = [
  {
    id: 1,
    image: taaskly,
    link: "http://devhedris-taaskly-booking.vercel.app/",
    name: "Taaskyly Bookings",
    buttons: [
      "NEXTJS",
      "TYPESRIPT",
      "MONGODB",
      "TWILIO",
      "NODE MAILER",
      "SUPABASE",
    ],
    content:
      "A booking platform where users could create booking profile by signing up and create a booking service with their pricing including the availability, user's customer are allowed to book an appointment and pay the amount designated by the owner. User's could withdraw their money generated from their appointments ",
  },
  {
    id: 2,
    image: fenkie,
    link: "https://fenkei.vercel.app/",
    name: "Fenkei",
    buttons: ["REACT", "REDUX", "REACT TESTING", "JEST"],
    content:
      "Fenkei is a blog app platform that allows users to create, publish, and share their written content with the world. It provides a streamlined and user-friendly interface for bloggers to create and publish their posts, as well as tools for managing their content and engaging with their audience.    ",
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
