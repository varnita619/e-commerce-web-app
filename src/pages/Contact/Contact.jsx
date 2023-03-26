import React from "react";
import "./Contact.css";
import twitter from "./../../assets/assets/twitter.svg";
import insta from "./../../assets/assets/insta.svg";
import fb from "./../../assets/assets/facebook.svg";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="sub-container">
        <h2 className="contact-heading">REACH US AT</h2>

        <div className="contact-info">
          <div>
            <h5 className="contact-mail">support@kicksup.com</h5>
            <p className="contact-subheading">for any technical support</p>
          </div>
          <div>
            <h5 className="contact-mail">info@kicksup.com</h5>
            <p className="contact-subheading">for more information</p>
          </div>
          <h5 className="contact-mail">feedback@kicksup.com</h5>
          <p className="contact-subheading">to send your feedback</p>
          <h5 className="contact-mail">jobs@kicksup.com</h5>
          <p className="contact-subheading">to work with us</p>
        </div>
      </div>

      <div className="footer">
        <p className="footer-content">stay in touch</p>
        <img src={twitter} alt="twitter" />
        <img src={insta} alt="insta" />
        <img src={fb} alt="fb" />
      </div>
    </div>
  );
};
