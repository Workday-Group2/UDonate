import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-component">
        <h3 className="contact-title">Contact Us</h3>
        <div className="contact-content">
          <div className="contact-summary">
            <ul>
              <li>
                <span className="contact-label">Email:</span>
                <span className="contact-label">food@donation.org</span>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <span className="contact-label">1-800-Donation</span>
              </li>
              <li>
                <span className="contact-label">Address:</span>
                <span className="contact-label">
                  6110 Stoneridge Mall Rd, San Francisco, CA
                </span>
              </li>
              <li>
                <span className="contact-label">Socials: </span>
                <span className="contact-socials"></span>
              </li>
            </ul>
          </div>

          <div className="contact-photo">
            <img
              className="contact-media"
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
