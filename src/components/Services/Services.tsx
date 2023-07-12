import Box from "./Box/Box";
import classes from "./Services.module.css";
import service1 from "../../assets/icons/service1.svg";
import service2 from "../../assets/icons/service2.svg";
import service3 from "../../assets/icons/service3.svg";

const Services = () => {
  const data = [
    {
      id: 1,
      name: "Website Design",
      text: "Ensuring technical feasibily of UI/UX design by providing clean and responsive website",
      image: service1,
    },
    {
      id: 2,
      name: "Website Design",
      text: "Ensuring technical feasibily of UI/UX design by providing clean and responsive website",
      image: service1,
    },
    {
      id: 3,
      name: "Website Design",
      text: "Ensuring technical feasibily of UI/UX design by providing clean and responsive website",
      image: service1,
    },
  ];
  return (
    <section className={classes.Services}>
      <div className={classes.Header}>
        <h2>
          Look at my <span>Services</span>
        </h2>
        <span className={classes.HeaderText}>
          If you are looking for someone who will help you to build your website
          or web app presence than congratulations!
        </span>
      </div>
      <div className={classes.Boxes}>
        {data.map((box) => (
          <Box key={box.id} name={box.name} text={box.text} image={box.image} />
        ))}
      </div>
    </section>
  );
};

export default Services;
