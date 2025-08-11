import React from "react";
import Footer from "../../components/footer";
import PrivacyDetail from "../../components/privacy-detail/detail-mn";
import Navbar from "../../components/navbar";
import PrivacyLinks from "../../components/privacy-links";
import DarkTheme from "../../layouts/dark";

const PrivacyPage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                <h2>
                  НУУЦЛАЛЫН БОДЛОГО
                </h2>
                <PrivacyLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PrivacyDetail />
      <Footer />
    </DarkTheme>
  );
};

export default PrivacyPage;
