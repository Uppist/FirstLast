/** @format */

import React from "react";
import styles from "./Mission.module.css";
import mission from "../../../assets/desktop/Mission/image1.png";

export default function Mission() {
  return (
    <section className={styles.background}>
      <div className={styles.mission}>
        <div>
          <h2>
            Our <label>Mission</label>
          </h2>
          <span>
            Our mission is to bridge the gap between productivity and well-being
            by offering a wellness platform tailored especially to corporate
            clients through evidence-based practices, accessible resources,
            health plan auditing/consulting and real-time progress tracking.
            <br /> This would place in the hands of people, the enablement to
            take control of their lives, manage their health, reduce stress, and
            live with a sense of greater purpose.
          </span>
        </div>
        <img src={mission} alt='' />
      </div>
    </section>
  );
}
