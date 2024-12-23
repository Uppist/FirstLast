/** @format */

import React from "react";
import choose from "../../../assets/desktop/Choose/image1.png";
import choosemobile from "../../../assets/mobile/Choose/choose.png";

import styles from "./Choose.module.css";

export default function Choose() {
  return (
    <section className={styles.choose}>
      <img className={styles.chooseimg} src={choose} alt='' />
      <img className={styles.choosemobile} src={choosemobile} alt='' />

      <div>
        <h2>Why You Should Choose Us:</h2>
        <ul>
          <li className={styles.li}>
            <span>Comprehensive Wellness Solutions</span>: Tailored, evidence-
            based programs designed to enhance employee well-being and
            productivity.
          </li>
          <li className={styles.li}>
            <span> Innovative Tools and Resources</span>: Real-time progress
            tracking and accessible resources to support meaningful workplace
            wellness.
          </li>
          <li className={styles.standalone}>
            <span> Boost Engagement and Reduce Burnout</span>: Foster a
            healthier, more productive culture while empowering employees to
            thrive.
          </li>
        </ul>
      </div>
    </section>
  );
}
