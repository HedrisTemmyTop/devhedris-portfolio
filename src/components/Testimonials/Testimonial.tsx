import Comment from "./Carousel/Carousel";
import classes from "./Testimonials.module.css";
const Testimonails = () => {
  return (
    <section className={classes.Testimonials}>
      <div className={classes.Container}>
        <div className={classes.Head}>
          <h2>
            Client <span>testimonails</span>
          </h2>
          <div className={classes.Cap}>
            Here is some love words from my clients around the world. Hope you
            will be here next.
          </div>
        </div>
        <div className={classes.Content}>
          {/* <div className={classes.Box}>
            <div className={classes.BoxGradient}></div>
            <div className={classes.Stars}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <h2 className={classes.Text}>
              {" "}
              "Great template and custom service! I needed to make some specific
              changes and Temmy sent me a quick step by step video explaining
              how to make changes. "
            </h2>
            <div className={classes.Owner}>
              <img src={client1} />
              <div>
                <h3>Jessica Davies</h3>
                <div> Cloud</div>
              </div>
            </div>
          </div> */}
          <Comment />
        </div>
      </div>
    </section>
  );
};

export default Testimonails;
