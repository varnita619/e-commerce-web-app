import React from "react";
import "./Team.css";
import zidane from "./../../assets/assets/zidane.jpg";
import tonikroos from "./../../assets/assets/tonikroos.jpg";
import ikercasillas from "./../../assets/assets/ikercasillas.jpg";
import james from "./../../assets/assets/james.jpg";
import christiano from "./../../assets/assets/christiano.jpg";
import nba from "./../../assets/assets/nba.png";
import linkedin from "./../../assets/assets/linkedin.png";
import fb from "./../../assets/assets/facebook.svg";
import medium from "./../../assets/assets/medium.png";

export const Team = () => {
  return (
    <div className="team-container">
      <div className="team-message">
        <p>
          Without bonding and coordination, every project is a failure. Look at
          who makes KICKSUP great :)
        </p>
      </div>
      <div className="team-members-container">
        <div class="shadow-card">
          <div class="card-image">
            <img src={zidane} alt="zidane" />
          </div>

          <div class="shadow-card-details">
            <h4>Zidane</h4>
            <p>Leadership & management</p>
          </div>

          <div className="member-contact-info">
            <img src={linkedin} alt="linkdin" className="social-icon" />
            <img src={medium} alt="medium" className="social-icon" />
            <img src={fb} alt="facebook" className="social-icon" />
          </div>
        </div>

        <div class="shadow-card">
          <div class="card-image">
            <img src={tonikroos} alt="tonikroos" />
          </div>

          <div class="shadow-card-details">
            <h4>Toni Kroos</h4>
            <p>Project Developer</p>
          </div>

          <div className="member-contact-info">
            <img src={linkedin} alt="linkdin" className="social-icon" />
            <img src={medium} alt="medium" className="social-icon" />
          </div>
        </div>

        <div class="shadow-card">
          <div class="card-image">
            <img src={ikercasillas} alt="ikercasillas" />
          </div>

          <div class="shadow-card-details">
            <h4>Iker Casillas</h4>
            <p>Marketing Strategy</p>
          </div>

          <div className="member-contact-info">
            <img src={medium} alt="medium" className="social-icon" />
          </div>
        </div>

        <div class="shadow-card">
          <div class="card-image">
            <img src={james} alt="james" />
          </div>

          <div class="shadow-card-details">
            <h4>James</h4>
            <p>Product Designer</p>
          </div>

          <div className="member-contact-info">
            <img src={medium} alt="medium" className="social-icon" />
            <img src={nba} alt="nba" className="social-icon" />
            <img src={linkedin} alt="linkdin" className="social-icon" />
          </div>
        </div>

        <div class="shadow-card">
          <div class="card-image">
            <img src={christiano} alt="christiano" />
          </div>

          <div class="shadow-card-details">
            <h4>Christiano</h4>
            <p>Financial Operations</p>
          </div>

          <div className="member-contact-info">
            <img src={linkedin} alt="linkdin" className="social-icon" />
            <img src={fb} alt="facebook" className="social-icon" />
          </div>
        </div>
      </div>

      <div className="last-message">and You! :)</div>
    </div>
  );
};
