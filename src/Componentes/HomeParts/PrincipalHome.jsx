import React from "react";
import styles from "./PrincipalHome.module.css";
import Arrow from "../../../images/Arrow.svg?react";
import Facebook from "../../../images/Facebook.svg?react";
import Twitter from "../../../images/Twitter.svg?react";
import Linkedin from "../../../images/Linkedin.svg?react";
import Button from "../Elements/Button";
import P from "../Elements/P";

const PrincipalHome = () => {
  return (
    <div className={styles.principal}>
      <div className={styles.comerce}>
        <div className={styles.ad}>
          <P>FIND YOUR ENERGY</P>
          <h1 className={styles.makeTitle}>
            MAKE YOUR BODY <br />{" "}
            <span className={styles.skinny}>FIT & PERFECT</span>
          </h1>
          <Button>
            OUR CLASSES <Arrow />
          </Button>
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
  );
};

export default PrincipalHome;
