import React from "react";
import AboutUs from "../components/about-us";
import CallToAction from "../components/cta";
import Footer from "../components/footer";
import Slider from "../components/slider";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Team from "../components/team-home";
import DarkTheme from "../layouts/dark";
import Members from "../components/members";

const Homepage = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Slider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Services withBG withPadding />
        <Team />
        <Members />
        <CallToAction subBG />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage;
