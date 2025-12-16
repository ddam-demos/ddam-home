/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer
      className={`footer-half ${noSubBG ? "" : "sub-bg"} section-padding pb-0`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <h6 className="custom-font stit simple-btn">Contact Us</h6>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> ddam@group.data-artist.com
                  </li>
                  <li>
                    <span>Address : </span> Labor Tower 9F, Sukhbaatar Square, Chingeltei District 1, Ulaanbaatar 15160, Mongolia
                  </li>
                  <li>
                    <span>Phone : </span> (+976) 77 11 33 26
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="social-icon mb-50">
              <h6 className="custom-font stit simple-btn">Follow Us</h6>
              <div className="social">
                <a href="https://www.facebook.com/DDAMongol" className="icon mr-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://mn.linkedin.com/company/ddam" className="icon mr-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/dentsu.data.artist.mongol" className="icon mr-4">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="https://instagram.com/dentsu.data.artist.mongol">
                  <img src="/img/insta/DDAM-Team.png" alt="" />
                </a>
                <a href="https://instagram.com/dentsu.data.artist.mongol">
                  <img src="/img/insta/halloween-indoor.png" alt="" />
                </a>
                <a href="https://instagram.com/dentsu.data.artist.mongol">
                  <img src="/img/insta/Sport-day 3.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>© 2022, Dentsu Data Artist Mongol</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
