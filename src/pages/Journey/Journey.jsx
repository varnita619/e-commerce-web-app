import React from "react";
import bgImg from "./../../assets/assets/grasspic.jpg";
import logo from "./../../assets/assets/logo.png";
import "./Journey.css";

export const Journey = () => {
  return (
    <div className="journey-container">
      <div className="bg-img-container">
        <img src={bgImg} alt="bgImg" className="bg-img" />
        <div className="heading">THE JOURNEY</div>

        <div className="content-parent-container">
          <div className="bg-logo-container"><img src={logo} alt="bg" className="bg-logo" /></div>
          <div>
            <div class="circle c-1"></div>
            <div class="circle c-2"></div>
            <div class="circle c-3"></div>
            <div class="circle c-4"></div>
          </div>

          <div className="content-container">
            <div className="first-content">
              <h6 className="content-heading">The roots</h6>
              <p className="content-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis maxime voluptatibus autem vel praesentium,
                repellendus tempora eum laborum vero ipsa, magni saepe, officiis
                doloribus.
              </p>
            </div>

            <div className="first-content">
              <h6 className="content-heading">Chapter |</h6>
              <p className="content-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis maxime voluptatibus autem vel praesentium,
                repellendus tempora eum laborum vero ipsa, magni saepe, officiis
                doloribus.
              </p>
            </div>

            <div className="first-content">
              <h6 className="content-heading">Chapter ||</h6>
              <p className="content-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis maxime voluptatibus autem vel praesentium,
                repellendus tempora eum laborum vero ipsa, magni saepe, officiis
                doloribus.
              </p>
            </div>

            <div className="first-content">
              <h6 className="content-heading">kicksup</h6>
              <p className="content-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis maxime voluptatibus autem vel praesentium,
                repellendus tempora eum laborum vero ipsa, magni saepe, officiis
                doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
