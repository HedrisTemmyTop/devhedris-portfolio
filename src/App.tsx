import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Process from "./components/Process/Process";
import About from "./components/About/About";
const hero = {
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
};

const App = () => {
  return (
    <div className="app">
      <div className="hero" style={hero}>
        <Header />
        <Hero />
        <Companies />
      </div>
      <div>
        <Services />
      </div>
      <Projects />
      <Process />
      <About />
    </div>
  );
};

export default App;
