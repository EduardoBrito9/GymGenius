import React from "react";
import styles from "./Footer.module.css";
import Facebook from "../images/Facebook.svg?react";
import Twitter from "../images/Twitter.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.internContainer}>
        <div className={styles.gymFooter}>
          <img src="../../images/gymweight.png" alt="" />{" "}
          <p className={styles.textInformation}>
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className={styles.midias}>
            <button>
              <Facebook />
            </button>
            <button>
              <Twitter />
            </button>
            <button>
              <Twitter />
            </button>
            <button>
              <Twitter />
            </button>
          </div>
          <p className={styles.end}>
            Privacy Policy | © 2024 Gymate Design by RadiusTheme
          </p>
        </div>
        <div className={styles.ourClasses}>
          <ul className={styles.listOurClasses}>
            <div>
              <h4 className={styles.footerTitle}>Our Classes</h4>
              <span className={styles.border}></span>
            </div>
            <li>Fitness Classes</li>
            <li>Aerobics Classes</li>
            <li>Power Yoga</li>
            <li>Learn Machines</li>
            <li>Full-body Strength</li>
          </ul>
        </div>
        <div className={styles.ourClasses}>
          <ul className={styles.listOurClasses}>
            <div>
              <h4 className={styles.footerTitle}>Working Hours</h4>
              <span className={styles.border}></span>
            </div>
            <li className={styles.bold}>Monday - Friday:</li>
            <li className={styles.normal}> 7:00am - 21:00pm</li>
            <li className={styles.bold}>Saturday:</li>
            <li className={styles.normal}> 7:00am - 19:00pm</li>
            <li className={styles.bold}>Sunday - Closed</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
