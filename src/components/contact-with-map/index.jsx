import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Split from "../splitter";

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cont-info">
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Ulaanbaatar Office
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="emalto:ddam@group.data-artist.com">
                      ddam@group.data-artist.com
                    </a>
                  </h5>
                  <h5>(+976) 77 11 33 26</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                    Altan Joloo Tower 6F, Seoul street, 5th khoroolol, 3rd
                    khoroo,
                    <br />
                    Sukhbaatar district, Ulaanbaatar Mongolia, 14252.
                  </h6>
                </div>
                <div className="social mt-50">
                  <a href="https://www.facebook.com/DDAMongol/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/ddam">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="cont-info">
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Tokyo Office
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="https://www.data-artist.com/">data-artist.com</a>
                  </h5>
                  <h5>(+81) 03-6216-8682</h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                    1-8-1 Higashi-Shimbashi, Minato-ku,
                    <br />
                    Tokyo 105-7001, Japan
                  </h6>
                </div>
                <div className="social mt-50">
                  <a href=" https://www.linkedin.com/company/data-artist/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.2279077283124!2d106.9035852767896!3d47.91262747121949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96933fcba07637%3A0xf746822e44ee5b35!2sAltan%20Joloo%20Tower!5e0!3m2!1sja!2smn!4v1777373947582!5m2!1sja!2smn"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>© 2022, Dentsu Data Artist Mongol</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
