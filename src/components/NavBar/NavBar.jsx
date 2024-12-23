/** @format */

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import fl from "../../../assets/desktop/NavBar/fllogo.png";
import flmobile from "../../../assets/mobile/NavBar/image1.png";

export default function NavBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function sideBar() {
    setIsSidebarVisible(true);
    console.log("hello");
  }

  function onClose() {
    setIsSidebarVisible(false);
  }
  return (
    <header className={styles.firstsection}>
      <nav className={styles.nav}>
        <img src={fl} alt='logo' className={styles.fllogo} />
        <img src={flmobile} alt='logo' className={styles.flmobile} />

        <ul className={styles.navul}>
          <li className={styles.list}>Home</li>
          <li className={styles.lists}>About Us</li>
          <li className={styles.lists}>Our Services</li>

          <li className={styles.listcontact}>Contact Us</li>

          <li className={styles.listmenu} onClick={sideBar}>
            <a className='dropdown'>
              <svg
                width='27'
                height='26'
                viewBox='0 0 27 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41882 18.4188L20.5915 18.4188'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 13H20.5915'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 7.58118L14.0889 7.58119'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul>

        <div
          className={`${styles.sidebar} ${
            isSidebarVisible ? styles.active : styles["fade-out"]
          }`}
        >
          <div className={styles.imageclose}>
            <img src={flmobile} alt='' />
            <a className='dropdown-close' onClick={onClose}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243'
                  stroke='#2B2B2B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>

          <ul className={styles.sidebarmenu}>
            <li className={styles.sidebarlist}>Home</li>
            <hr />
            <li className={styles.sidebarlist}>About Us</li>
            <hr />
            <li className={styles.sidebarlist}>Our Service</li>
            <hr />
            <li className={styles.sidebarcontact}>Contact Us</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
