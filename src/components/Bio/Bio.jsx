/** @format */

import React from "react";
import styles from "./bio.module.css";
import image from "../../../assets/desktop/bio.png";
import { Link } from "react-router-dom";

export default function Bio() {
  return (
    <div className={styles.bio}>
      <div className={styles.bioContainer}>
        <div className={styles.bioContent}>
          <div className={styles.bioText}>
            <div className={styles.text}>
              <h2>Meet Our Founder</h2>
              <p>
                <span>Mavis Izegbune</span> is a Nurse Health Coach and Wellness
                Consultant. She has over a decade combined experience in
                Clinical Nursing, Public health, Case Management, Therapy and
                Counseling, and Occupational health Consulting. She has a degree
                in Nursing from the prestigious University of Lagos, Nigeria and
                did a course in Psychology from the aforementioned institution.
                She also has a certification in Entrepreneurial Studies from the
                Covenant Capital Business School, and has worked with
                individuals and notable organizations to achieve their overall
                health and productivity goal.
              </p>
              <p>
                <br />
                <br /> Furthermore, she has a deep seated desire to empower
                people to take control of their health and health outcomes,
                thereby reducing hospital visits and stay. She also seeks to
                empower systems for productivity, one life at a time by
                equipping both individuals and organizations with the right
                tools to build resilience against the odds, as well as adopt a
                mindset for excellence.
              </p>
            </div>
            <img src={image} alt='' />
          </div>
          <p>
            Mavis is the{" "}
            <span>Founder of First and Last Wellness, Ten Times Fruits</span>
            and <span>LOOD;</span> all of which are designed to promote an
            optimum state of well-being.
          </p>
          <Link to='https://calendly.com/mavisizegbunebookings'>
            <button>Book a session with me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
