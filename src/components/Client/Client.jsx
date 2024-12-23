/** @format */

import React from "react";
import image1 from "../../../assets/desktop/Client/client1.png";
import image2 from "../../../assets/desktop/Client/client2.png";
import image3 from "../../../assets/desktop/Client/client3.png";

import styles from "./Client.module.css";

export default function Client() {
  return (
    <section className={styles.client}>
      <h2>
        Our <label>Clientele</label>
      </h2>
      <div>
        <img className={styles.image1} src={image1} alt='' />
        <img className={styles.image2} src={image2} alt='' />
        <img className={styles.image1} src={image3} alt='' />
      </div>
    </section>
  );
}
