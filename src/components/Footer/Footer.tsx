import email from "../../assets/icons/61fa2fddbcda0616c1faa395_Mail Icon.svg";
import phone from "../../assets/icons/61fa307e4c3858f26c8df537_Phone Icon.svg";

const Footer = () => {
  return (
    <footer className="footer section--hidden section" id="contact-me">
      <section className="footer__first">
        <div className="services__head">
          <h2
            className="heading__1 heading__1--normal"
            style={{ maxWidth: "75rem", textAlign: "center" }}
          >
            Have projects in mind ? lets work
            <span className="heading__1--gradient"> together</span>
          </h2>
          <p className="text services__text ">
            I'm Hedris TemmyTop— a Frontend engineer.We provide the perfect
            blend of people and technology. Our approach to problem-solving &
            strategic planning will help you deliver exceptional services.
          </p>
          <a href="tel:+2348161126466">
            <button className="book">
              <span>Book A FREE call</span>
              <span className="ArrowLeft">→</span>
            </button>
          </a>
        </div>
      </section>

      <section className="footer__last">
        <div className="footer__container">
          <div className="footer__container--contact">
            <div className="footer__container--contact email mail">
              <a href="mailto:hedristemitope2001@gmail.com">
                <button className="email">
                  {" "}
                  <span>
                    <img src={email} alt="" />
                  </span>{" "}
                  <h2 className="email--head">hello@hedris.com</h2>
                </button>
              </a>
            </div>
            <div className="footer__container--contact mail margin-top-high">
              <a href="tel:+2348161126466">
                <button className="email">
                  {" "}
                  <span>
                    <img src={phone} alt="" />
                  </span>{" "}
                  <h2 className="email--head">+2348161126466</h2>
                </button>
              </a>
            </div>
          </div>
          <div className="footer__links">
            <ul className="footer__links--pages">
              <h3 className="footer__links--head">PAGES</h3>
              <li className="footer__links--item">
                <a href="#home" className="footer__links--link">
                  Home
                </a>
              </li>
              <li className="footer__links--item">
                <a href="#services" className="footer__links--link">
                  Services
                </a>
              </li>
              <li className="footer__links--item">
                <a href="#projects" className="footer__links--link">
                  Projects
                </a>
              </li>
              <li className="footer__links--item">
                <a href="#about" className="footer__links--link">
                  About Me
                </a>
              </li>
              <li className="footer__links--item">
                <a href="#blog" className="footer__links--link">
                  Blog
                </a>
              </li>
              <li className="footer__links--item">
                <a
                  href="tel:+2348161126466"
                  className="footer__links--link contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            <ul className="footer__links--pages">
              <h3 className="footer__links--head">SOCIAL MEDIA</h3>

              <li className="footer__links--item">
                <a
                  href="https://twitter.com/HedrisTemmyTop"
                  className="footer__links--link"
                >
                  Twitter
                </a>
              </li>
              <li className="footer__links--item">
                <a
                  href="https://www.linkedin.com/in/idris-babalola-171918223/"
                  className="footer__links--link"
                >
                  Linkedln
                </a>
              </li>
              <li className="footer__links--item">
                <a href="" className="footer__links--link">
                  Faceebook
                </a>
              </li>
              <li className="footer__links--item">
                <a
                  href="https://www.instagram.com/hedris_temmy_top/"
                  className="footer__links--link"
                >
                  Instagram
                </a>
              </li>
              <li className="footer__links--item">
                <a
                  href="https://wa.me/message/O6DEBLNSZ4HTM1"
                  className="footer__links--link"
                >
                  Whatsapp
                </a>
              </li>
            </ul>

            <ul className="footer__links--pages">
              <h3 className="footer__links--head">LOCATION</h3>

              <li className="footer__links--item">
                <span className="footer__links--link">
                  No 50, Islamiyyah street, abebi area,
                  <br /> ikire osun state
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="copy">
        &copy; All rights reserved . Developed by dhadrexytheplug
      </div>
    </footer>
  );
};

export default Footer;
