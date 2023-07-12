import classes from "./About.module.css";
import img2 from "../../assets/images/image1.jpeg";
import img3 from "../../assets/images/image2.jpeg";
import img1 from "../../assets/images/image3.jpeg";

const About = () => {
  return (
    <section className={classes.About}>
      <div className={classes.Container}>
        <div className={classes.Head}>
          <h1>Hedris</h1>
          <h1>TemmyTop</h1>
        </div>
        <div className={classes.Text}>
          Web developer, with extensive knowledge and years of experience,
          working in web technologies and Ui / Ux design, delivering quality
          work.
        </div>
        <div className={classes.Text}>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards.
        </div>
        <div className={classes.Cap}>
          <span>
            <div>20+</div>
            <div>Projects done</div>
          </span>
          <span>
            <div>02+</div>
            <div>Years experience</div>
          </span>
          <span>
            <div>20M</div>
            <div>Total funding</div>
          </span>
        </div>
      </div>
      <div className={classes.about__pictures}>
        <div
          className={[classes.about__pictures__one, classes.about_pic].join(
            " "
          )}
        >
          <img
            src={img1}
            alt=""
            className={[
              classes.about__pictures__picture,
              classes.about__pictures__picture__1,
            ].join(" ")}
          />
          <img
            src={img2}
            alt=""
            className={[
              classes.about__pictures__picture,
              classes.about__pictures__picture__2,
            ].join(" ")}
          />
        </div>
        <div
          className={[classes.about__pictures__two, classes.about_pic].join(
            " "
          )}
        >
          <img
            src={img3}
            alt=""
            className={[
              classes.about__pictures__picture,
              classes.about__pictures__picture__3,
            ].join(" ")}
          />
          <img
            src={img1}
            alt=""
            className={[
              classes.about__pictures__picture,
              classes.about__pictures__picture__4,
            ].join(" ")}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
