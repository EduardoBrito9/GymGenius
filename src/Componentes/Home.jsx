import React from "react";
import AboutLeft from "./AboutLeft";
import styles from "./Home.module.css";
import Arrow from "../../images/Arrow.svg?react";
import Facebook from "../../images/Facebook.svg?react";
import Twitter from "../../images/Twitter.svg?react";
import Linkedin from "../../images/Linkedin.svg?react";

const Home = ({ informations, setInformations }) => {
  function checkingClick(event) {
    if (
      !event.target.classList.contains("check") &&
      !event.target.parentNode.parentNode.classList.contains("check")
    ) {
      setInformations(false);
    }
  }
  return (
    <section className={styles.home} onClick={checkingClick}>
      <AboutLeft
        informations={informations}
        setInformations={setInformations}
      />
      <div className={styles.principal}>
        <div className={styles.comerce}>
          <div className={styles.ad}>
            <p className={styles.find}>FIND YOUR ENERGY</p>
            <h1 className={styles.makeTitle}>
              MAKE YOUR BODY <br />{" "}
              <span className={styles.skinny}>FIT & PERFECT</span>
            </h1>
            <button className={styles.buttonClass}>
              OUR CLASSES <Arrow />
            </button>
          </div>
          <div className={styles.market}>
            <p>SHARE</p>
            <span className={styles.line}></span>
            <ul className={styles.socialMedia}>
              <li>
                <Linkedin />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Facebook />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
