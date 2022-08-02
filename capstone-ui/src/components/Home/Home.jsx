import * as React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import About from "../About/About";

export default function Home() {
  return (
    <div className="home">
      <h1 className="project-title"><a className="title-home" >UDONATE</a></h1>
      <div className="home-wrapper">
        <div className="image">
          <img
            className="hero-img"
            src="https://i.ibb.co/cxbQPyJ/imageedit-2-6335780812.png"
          />
        </div>
        <div className="about-tab" id="about" role="tabpanel" aria-labelledby="about-tab">
        <About />
        </div>
        <div className="contact-tab" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <Contact />
        </div>
      </div>
    </div>
  );
}
