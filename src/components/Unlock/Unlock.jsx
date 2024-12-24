/** @format */

import React from "react";
import styles from "./Unlock.module.css";
import unlock from "../../../assets/desktop/Unlock/Image.png";
import unlockmobile from "../../../assets/mobile/Unlock/image1.png";

export default function Unlock({ contactRef, scrollToSection }) {
  return (
    <section className={styles.background}>
      <div className={styles.unlock}>
        <div>
          <h2>Ready to Elevate Your Team's Health and Well-Being?</h2>
          <button onClick={() => scrollToSection(contactRef)}>
            Contact Us
          </button>
        </div>
        <img className={styles.desktopimg} src={unlock} alt='' />
        <img className={styles.mobile} src={unlockmobile} alt='' />
      </div>
    </section>
  );
}
