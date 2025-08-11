import React from "react";
import AboutHeader from "../../components/about-header";
import AboutIntro from "../../components/about-intro";
import CallToAction from "../../components/cta";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Services from "../../components/services";
import Team from "../../components/team";
import DarkTheme from "../../layouts/dark";

const AboutDark = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <AboutHeader />
      <AboutIntro />
      <Services withPadding withOutTitle />
      <Team />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default AboutDark;
