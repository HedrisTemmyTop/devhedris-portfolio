import logo from "../../assets/icons/logo-user.svg";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.Header}>
      <aside>
        <img src={logo} alt="logo" />
      </aside>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Projects</li>
        <li>About Me</li>
        <li>Blog</li>
      </ul>
      <aside>
        <button>Contact Me</button>
      </aside>
    </header>
  );
};

export default Header;
