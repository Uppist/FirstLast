/** @format */

import React, { useRef } from "react";
import "./style.css";
import NavBar from "./components/NavBar/NavBar";
import Empower from "./components/Empower/Empower";
import About from "./components/AboutUs/About";
import Mission from "./components/Mission/Mission";
import Service from "./components/Services/Service";
import Client from "./components/Client/Client";
import Unlock from "./components/Unlock/Unlock";
import Choose from "./components/Choose/Choose";
import Footer from "./components/Footer/Footer";

export default function App() {
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <NavBar
        aboutRef={aboutRef}
        serviceRef={serviceRef}
        contactRef={contactRef}
        homeRef={homeRef}
        scrollToSection={scrollToSection}
      />
      <div ref={homeRef}>
        <Empower aboutRef={aboutRef} scrollToSection={scrollToSection} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <Mission />
      <div ref={serviceRef}>
        <Service contactRef={contactRef} scrollToSection={scrollToSection} />
      </div>
      <Client />
      <Unlock contactRef={contactRef} scrollToSection={scrollToSection} />
      <Choose />
      <div ref={contactRef}>
        <Footer
          aboutRef={aboutRef}
          serviceRef={serviceRef}
          scrollToSection={scrollToSection}
        />
      </div>
    </>
  );
}
