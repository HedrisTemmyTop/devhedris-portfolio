import star from "../../../assets/icons/stars.svg";
import client1 from "../../../assets/images/client1.png";

import classes from "../Testimonials.module.css";
import "../../../App.css";
const Box = () => {
  return (
    <div className="testimony__boxes--box">
      <div className={classes.BoxGradient}></div>

      <div className={classes.stars}>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <h2 className="testimony__head">
        -- Working with Pritom was a breeze... I was impressed. --
      </h2>
      <p className="text testimony__text text-margin-top">
        "Temmy is a great guy who has a perfect eye for design He built an
        icredible website for my school."
      </p>
      <div className="testimony__user">
        <img src={client1} alt="" className="testimony__user--img" />
        <div className="testimony__user--details">
          <h2 className="testimony__user--details-name">Jessica Davies</h2>
          <p className="text">Prodct designer at kuda</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
