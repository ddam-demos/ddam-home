import React from "react";
import Split from "../splitter";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Dentsu Data Artist Mongol was established as a subsidiary of
                  Data Artist Inc. in June 2018, <br /> in Ulaanbaatar Mongolia.
                  Currently we are operating with more than 50 Mongolian
                  talented youths. <br /> As a member of Dentsu Group we have
                  been providing data analysis, AI module & System development
                  services in digital marketing to our group companies around
                  the globe. <br /> As a company depending on human
                  intelligence, we always value our employees above all and aim
                  to create development opportunities for them. Our members have
                  experience in collaborating with global clients under
                  mentorship of experts of the field.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
