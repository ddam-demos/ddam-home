import React from "react";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/ddam-members-5.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center" style={{marginBottom: "370px"}}>
              <h1 className="m-23">About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
