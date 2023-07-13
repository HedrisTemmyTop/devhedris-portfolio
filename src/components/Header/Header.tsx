import logo from "../../assets/icons/logo-user.svg";
import classes from "./Header.module.css";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className={classes.Header} id="home">
      <aside>
        <img src={logo} alt="logo" />
      </aside>
      <ul>
        <li className={classes.nav__list}>
          <a href="#home" className={classes.nav__link}>
            Home
          </a>
        </li>
        <li className={classes.nav__list}>
          <a href="#services" className={classes.nav__link}>
            Services
          </a>
        </li>
        <li className={classes.nav__list}>
          <a href="#projects" className={classes.nav__link}>
            Projects
          </a>
        </li>
        <li className={classes.nav__list}>
          <a href="#about" className={classes.nav__link}>
            About Me
          </a>
        </li>
        <li className={classes.nav__list}>
          <a href="#blog" className={classes.nav__link}>
            Blog
          </a>
        </li>
      </ul>
      <aside>
        <div
          className={classes.header__menu}
          onClick={() => setShow((prev) => !prev)}
        >
          <div className={classes.header__menu_icon}></div>
        </div>
        {show && (
          <nav className={classes.header__nav}>
            <ul className={classes.header__navlist}>
              <li className={classes.nav__list}>
                <a href="#home" className={classes.nav__link}>
                  Home
                </a>
              </li>
              <li className={classes.nav__list}>
                <a href="#services" className={classes.nav__link}>
                  Services
                </a>
              </li>
              <li className={classes.nav__list}>
                <a href="#projects" className={classes.nav__link}>
                  Projects
                </a>
              </li>
              <li className={classes.nav__list}>
                <a href="#about" className={classes.nav__link}>
                  About Me
                </a>
              </li>
              <li className={classes.nav__list}>
                <a href="#blog" className={classes.nav__link}>
                  Blog
                </a>
              </li>
              <li className={classes.nav__list}>
                <a href="#contact-me" className={classes.nav__link}>
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        )}
        <div className={classes.contact}>
          {/* <li className={classes.nav__list}>
            <a href="#" className={classes.nav__link}>
              Contact Me
            </a>
          </li> */}
        </div>
        <a href="#contact-me">
          <button>Contact Me</button>
        </a>
      </aside>
    </header>
  );
};

export default Header;
