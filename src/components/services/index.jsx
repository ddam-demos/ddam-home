import React from "react";
import Split from "../splitter";
import servicesData from "../../data/sections/services.json";

const Services4 = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What We Can Do
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Services.
              </h3>
            </Split>
            <span className="tbg">Services</span>
          </div>
        )}
        <div className="row">
          {servicesData.map((item, index) => (
            <div className="col-lg-3 sm-mb20 pb-6" key={item.id}>
              <div
                className={`item ${
                  index != servicesData.length - 1 ? "md-mb50" : ""
                } wow fadeInUp`}
                data-wow-delay={
                  item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s"
                }
              >
                <span className={`icon ${item.icon}`}></span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default Services4;
