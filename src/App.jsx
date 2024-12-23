/** @format */

import React from "react";
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
  return (
    <>
      <NavBar />
      <Empower />
      <About />
      <Mission />
      <Service />
      <Client />
      <Unlock />
      <Choose />
      <Footer />
    </>
  );
}
