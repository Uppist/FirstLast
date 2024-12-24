/** @format */

// /** @format */

// import React, { useRef } from "react";
// import "./style.css";
// import NavBar from "./components/NavBar/NavBar";
// import Empower from "./components/Empower/Empower";
// import About from "./components/AboutUs/About";
// import Mission from "./components/Mission/Mission";
// import Service from "./components/Services/Service";
// import Client from "./components/Client/Client";
// import Unlock from "./components/Unlock/Unlock";
// import Choose from "./components/Choose/Choose";
// import Footer from "./components/Footer/Footer";

// export default function App() {
//   const About = useRef(null);
//   const Service = useRef(null);

//   const scrollTo = (elementRef) => {
//     window.scrollTo({
//       top: elementRef.current.offsetTop,
//       behavior: "smooth",
//     });
//   };

//   function Next() {
//     scrollTo(About);
//     scrollTo(Service);
//   }
//   return (
//     <>
//       <NavBar Next={Next} />
//       <Empower />
//       <About ref={About} />
//       <Mission />
//       <Service ref={Service} />
//       <Client />
//       <Unlock />
//       <Choose />
//       <Footer />
//     </>
//   );
// }

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

  return (
    <>
      <NavBar
        aboutRef={aboutRef}
        serviceRef={serviceRef}
        contactRef={contactRef}
      />
      <Empower />
      <div ref={aboutRef}>
        <About />
      </div>
      <Mission />
      <div ref={serviceRef}>
        <Service />
      </div>
      <Client />
      <Unlock />
      <Choose />
      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
}
