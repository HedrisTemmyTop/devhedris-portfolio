import classes from "./Hero.module.css";
import myImg from "../../assets/images/myimage.jpeg";
const Hero = () => {
  return (
    <main>
      <div className={classes.HeroLeft}>
        <div className={classes.HeroHead}>
          <span>Frontend Engineer</span>
          <span> crafting products that people love</span>
        </div>
        <div className={classes.HeroText}>
          I'm Hedris Temitope— a junior developer who works with startups
          looking to push creative boundaries and create unique user experiences
          with high Level experience in web design and development knowledge,
          producing quality work
        </div>
        <button>
          <span>Book A FREE call</span>
          <span className={classes.ArrowLeft}>→</span>
        </button>
      </div>
      <div className={classes.HeroRight}>
        <img src={myImg} alt="user" />
      </div>
    </main>
  );
};

export default Hero;
