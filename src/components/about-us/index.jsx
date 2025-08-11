/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../splitter";
import AboutUsData from "../../data/sections/about-us.json";

const AboutUs = () => {
  return (
    <div className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img-mons-mobile sm-mb50">
            <div className="row">
                <div className="col-md-12 cmd-padding valign">
                  <div className="img1 wow imago" data-wow-delay=".5s">
                    <img src={AboutUsData.image4} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="img-mons">
              <div className="row">
                <div className="col-md-5 cmd-padding valign">
                  <div className="img1 wow imago" data-wow-delay=".5s">
                    <img src={AboutUsData.image1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 cmd-padding">
                  <div className="img2 wow imago" data-wow-delay=".3s">
                    <img src={AboutUsData.image2} alt="" />
                  </div>
                  <div className="img3 wow imago" data-wow-delay=".8s">
                    <img src={AboutUsData.image3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{AboutUsData.smallTitle}</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="words chars splitting main-title wow"
                  data-splitting
                >
                  {AboutUsData.title.first} <br /> {AboutUsData.title.second}
                </h3>
              </Split>
              <Split>
                <ul className="words chars splitting description-text wow txt" data-splitting>
                  <li>• by leading AI implementation in Society</li>
                  <li>• by bringing Solution to our clients Business</li>
                  <li>• by providing Opportunities to our Members</li>
                </ul>
              </Split>
              <div className="ftbox mt-30">
                <ul>
                  {AboutUsData.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`wow fadeIn ${feature.id == 2 ? "space" : ""}`}
                      data-wow-delay={feature.wowDelay}
                    >
                      <span
                        className={`icon color-font pe-7s-${feature.icon}`}
                      ></span>
                      <h6 className="custom-font">
                        {feature.name.first} <br /> {feature.name.second}
                      </h6>
                      <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
