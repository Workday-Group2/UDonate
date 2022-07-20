import * as React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import About from "../About/About";

export default function Home() {
  return (
    <div className="home">
      {/* <h1>Home</h1> */}
      <div className="home-wrapper">
        <div className="image">
          <img
            className="hero-img"
            src="https://i.ibb.co/cxbQPyJ/imageedit-2-6335780812.png"
          />
        </div>
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
