import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
     <div className="footer-column">
        <h3>Developers</h3>
        <div className="company col">
          <p>Ada Pici</p>
          <p>Nasradin Kewden</p>
          <p>Esteban Ayala</p>
          
        </div>
      </div>

      <div className="footer-column">
        <h3>Company</h3>
        <div className="company col">
          <p>About Us</p>
          <p>Terms</p>
          <p>Sitemap</p>
          <p>Careers</p>
          <p>Find a donation</p>
        </div>
      </div>

      <div className="footer-column">
        <h3>Support</h3>
        <div className="support col">
          <p>Contact Us</p>
          <p>Money Refund</p>
          <p>Order Status</p>
          <p>Shipping Info</p>
          <p>Open Dispute</p>
        </div>
      </div>

      <div className="footer-column">
      <h3>Account</h3>
        <div className="account col">
          <p>Login</p>
          <p>Register</p>
          <p>Account Settings</p>
          <p>My Donation</p>
          <p>My Booking</p>
        </div>
      </div>
      </div>
   
  );
}
