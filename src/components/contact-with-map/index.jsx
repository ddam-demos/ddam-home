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
                    Labor Tower 9F, Sukhbaatar Square, Chingeltei District 1,
                    <br />
                    Ulaanbaatar 15160, Mongolia
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
            <div className="col-lg-6">
              <div className="cont-info">
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Tokyo Office
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="https://www.data-artist.com/">
                      data-artist.com
                    </a>
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
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.51748630180902!2d106.91556416141847!3d47.91957612947173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693cb8b951709%3A0xa96efc83b2bfe8d7!2sTrade%20and%20Development%20Bank!5e0!3m2!1sen!2smn!4v1736221144586!5m2!1sen!2smn"
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
