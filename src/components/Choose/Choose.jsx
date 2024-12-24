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
            <span>Health plan auditing and consulting</span>: we consult for
            Human Resource teams, helping to conduct checks and audits on health
            plans/health insurance, for the purpose of accessing the best
            possible care for better outcomes. You could look at us as the “Man
            on the inside”.
          </li>
          <li className={styles.li}>
            <span>Workplace Ergonomics</span>: we conduct assessment and provide
            needed information on best practices to promote a space that is safe
            and efficient to interact in.
          </li>
          <li className={styles.standalone}>
            <span>Comprehensive Wellness solutions</span>: we offer personalized
            wellness strategies to individuals and teams looking to work smarter
            and healthier. This is done through wellness workshops, wellness
            retreats, mindset bootcamps, biometric screenings, etc.
          </li>
          <li className={styles.standalone}>
            <span>Health Information</span>: we stay up to date on health trends
            and disseminate information via a newsletter to our clients.
          </li>
          <li className={styles.standalone3}>
            <span>Point of Liaison</span>: we act as a form of liaison between
            clients and health care specialists such as clinical psychologists,
            psychiatrists, immunizations, nutritionists, etc.
          </li>
        </ul>
      </div>
    </section>
  );
}
