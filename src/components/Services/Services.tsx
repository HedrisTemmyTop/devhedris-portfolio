import Box from "./Box/Box";
import classes from "./Services.module.css";
import service1 from "../../assets/icons/service1.svg";
import service2 from "../../assets/icons/service2.svg";
import service3 from "../../assets/icons/service3.svg";

const Services = () => {
  const data = [
    {
      id: 1,
      name: "Frontend Development",
      text: "Building responsive, performant, and interactive user interfaces using modern frameworks like React and Next.js.",
      image: service1,
    },
    {
      id: 2,
      name: "Backend Architecture",
      text: "Designing and implementing scalable APIs, server-side logic, and robust database architectures using Node.js.",
      image: service2,
    },
    {
      id: 3,
      name: "Cloud & DevOps",
      text: "Deploying robust applications, setting up CI/CD pipelines, and managing secure cloud infrastructure.",
      image: service3,
    },
  ];
  return (
    <section className={classes.Services} id="services">
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
