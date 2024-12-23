/** @format */

import React from "react";
import styles from "./Service.module.css";
import Data from "./Service.json";

export default function Service() {
  return (
    <section className={styles.service}>
      <h2>
        Our <label>Services</label>
      </h2>

      <div className={styles.servicecontainer}>
        {Data.map((data) => (
          <div className={styles.container}>
            <img src={data.image} alt='' />
            <div className={styles.services}>
              <div>
                {" "}
                <h3>{data.Title}</h3>
                <hr />
                <span>{data.Text}</span>
              </div>
              <button>{data.book}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
