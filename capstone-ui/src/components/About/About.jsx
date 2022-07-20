import * as React from "react";
import "./About.css";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <div className="about-class">
      <h3 className="about-title">About Us</h3>
      <div className="about-wrapper">
        <div className="about-desc">
          <div className="about-center">
            <p>
              We want to break the barrier by giving low income college students
              or adults the ability to receive food donations when they don't
              have the ability to afford them. We are also fighting food waste
              by giving the option for others to donate quality food items that
              might've gone to waste otherwise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
