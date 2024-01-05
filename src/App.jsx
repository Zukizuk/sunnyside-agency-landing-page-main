import "./App.scss";
import Logo from "./images/logo.svg";
import Arrow from "./images/icon-arrow-down.svg";
import Emily from "./images/image-emily.jpg";
import Jennie from "./images/image-jennie.jpg";
import Thomas from "./images/image-thomas.jpg";
import D__Cone from "./images/desktop/image-gallery-cone.jpg";
import D__Bottles from "./images/desktop/image-gallery-milkbottles.jpg";
import D__Orange from "./images/desktop/image-gallery-orange.jpg";
import D__Sugar from "./images/desktop/image-gallery-sugarcubes.jpg";
import D__Stand from "./images/desktop/image-stand-out.jpg";
import D__Transform from "./images/desktop/image-transform.jpg";
import M__Cone from "./images/mobile/image-gallery-cone.jpg";
import M__Bottles from "./images/mobile/image-gallery-milkbottles.jpg";
import M__Orange from "./images/mobile/image-gallery-orange.jpg";
import M__Sugar from "./images/mobile/image-gallery-sugar-cubes.jpg";
import M__Stand from "./images/mobile/image-stand-out.jpg";
import M__Transform from "./images/mobile/image-transform.jpg";
import Menu from "./images/icon-hamburger.svg";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
function App() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance =
        document.body.scrollTop || document.documentElement.scrollTop;
      setScrolled(scrollDistance > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="header__container">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <nav className="nav">
            <button className="menu__button" onClick={() => setActive(!active)}>
              <img src={Menu} alt="" />
            </button>
            <ul className={active ? "Menu__List show" : "Menu__List"}>
              <li className="List__Items">About </li>
              <li className="List__Items">Services</li>
              <li className="List__Items">Projects</li>
              <li className="List__Items contact">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="hero__container">
          <h1 className="hero__heading">We are creatives</h1>
          <img src={Arrow} alt="" className="hero__image" />
        </div>
        <section className="section__one">
          <div className="section__block">
            <h2 className="section__heading">Transform your brand</h2>
            <p className="section__text">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#" className="section__link">
              Learn more
            </a>
          </div>
          <picture>
            <source media="(min-width: 64rem)" srcSet={D__Transform} />
            <img src={M__Transform} alt="" />
          </picture>
        </section>
        <section className="section__two">
          <picture>
            <source media="(min-width: 64rem)" srcSet={D__Stand} />
            <img src={M__Stand} alt="" />
          </picture>
          <div className="section__block">
            <h2 className="section__heading">
              Stand out to the right audience
            </h2>
            <p className="section__text">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="#" className="section__link">
              Learn more
            </a>
          </div>
        </section>
        <div className="illustrations__container">
          <section className="section__three">
            <div className="illustration__text">
              <h2 className="illustration__heading">Graphic design</h2>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </section>
          <section className="section__four">
            <div className="illustration__text">
              <h2 className="illustration__heading">Photography</h2>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </section>
        </div>
        {/* TESTIMONIALS */}
        <section className="testimonials__section">
          <h2 className="testimonials__heading">Client testimonials</h2>
          <div className="testimonials__container">
            <figure className="testimonial__section">
              <img src={Emily} alt="" />
              <blockquote>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </blockquote>
              <figcaption>
                <p>
                  <cite className="user__name">Emily R.</cite>
                  Marketing Director
                </p>
              </figcaption>
            </figure>
            <figure className="testimonial__section">
              <img src={Thomas} alt="" />
              <blockquote>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </blockquote>
              <figcaption>
                <p>
                  <cite className="user__name">Thomas S.</cite>
                  Chief Operating Officer
                </p>
              </figcaption>
            </figure>
            <figure className="testimonial__section">
              <img src={Jennie} alt="" />
              <blockquote>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </blockquote>
              <figcaption>
                <p>
                  <cite className="user__name"> Jennie F.</cite>
                  Business Owner
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="illustrations">
          <picture>
            <source media="(min-width: 64rem)" srcSet={D__Bottles} />
            <img src={M__Bottles} alt="" />
          </picture>
          <picture>
            <source media="(min-width: 64rem)" srcSet={D__Orange} />
            <img src={M__Orange} alt="" />
          </picture>
          <picture>
            <source media="(min-width: 64rem)" srcSet={D__Cone} />
            <img src={M__Cone} alt="" />
          </picture>
          <picture>
            <source media="(min-width: 64rem)" srcSet={D__Sugar} />
            <img src={M__Sugar} alt="" />
          </picture>
        </section>
      </main>
      <footer>
        <div className="footer__logo">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
        </div>
        <nav>
          <ul className="footer__list">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </nav>
        <nav className="footer__list__social">
          <ul className="social__list">
            <li>
              <FaIcons.FaFacebookSquare />
            </li>
            <li>
              <FaIcons.FaInstagram />
            </li>
            <li>
              <FaIcons.FaTwitter />
            </li>
            <li>
              <FaIcons.FaPinterest />
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
