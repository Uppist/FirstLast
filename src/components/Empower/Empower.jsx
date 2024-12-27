/** @format */

import React from "react";
import empower from "../../../assets/desktop/Empower/image1.png";
import empowermobile from "../../../assets/mobile/Empower/image1.png";

import styles from "./Empower.module.css";

export default function Empower({ aboutRef, scrollToSection }) {
  return (
    <section className={styles.background}>
      <div className={styles.empower}>
        <div>
          <div>
            <label> Empowering People for Productivity through Wellness.</label>
            {/* <span>
              Boost Team Wellness and Productivity with First and Last Wellness
            </span> */}
          </div>
          <button onClick={() => scrollToSection(aboutRef)}>Get Started</button>
        </div>
        <img className={styles.desktopimg} src={empower} alt='image' />
        <img className={styles.mobileimg} src={empowermobile} alt='image' />
      </div>
    </section>
  );
}
