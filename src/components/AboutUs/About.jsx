/** @format */

import React from "react";
import styles from "./About.module.css";
import about from "../../../assets/desktop/AboutUs/aboutus.png";
import aboutmobile from "../../../assets/mobile/AboutUs/about.png";

export default function About() {
  return (
    <section className={styles.about}>
      <img className={styles.desktopimg} src={about} alt='' />
      <img className={styles.mobileimg} src={aboutmobile} alt='' />

      <div>
        <h2>
          About <label>Us</label>
        </h2>
        <span>
          First and Last Wellness is one of its kind committed to empowering
          systems for productivity, one life at a time. Our goal is to enlighten
          and equip organizations with best practices with promote employee
          welfare and in turn contribute to productivity.
        </span>
      </div>
    </section>
  );
}
