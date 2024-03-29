import React from "react";
import P from "../Elements/P";
import Title from "../Elements/Title";
import Span from "../Elements/Span";
import Button from "../Elements/Button";
import Arrow from "../../../images/Arrow.svg?react";
import styles from "./tenthPart.module.css";

const TenthPart = () => {
  return (
    <section className={styles.tenthPart}>
      <section className={styles.internContainer}>
        <P>LATEST BLOG</P>
        <Title>Our Recent News </Title>
        <Span>
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </Span>
        <div className={styles.newContainer}>
          <div className={styles.newsCard}>
            <p className={styles.date}>22.03.2024</p>
            <div className={styles.internTextbox}>
              <h3>Yoga For Everyone in 2023</h3>
              <p>
                This is program designed to make the practice of yoga beneficial
                for people of all ages, abilities, and backgrounds.
              </p>
            </div>
            <Button>
              READ MORE <Arrow />{" "}
            </Button>
          </div>
          <div className={styles.newsCard}>
            <p className={styles.date}>13.09.2022</p>
            <div className={styles.internTextbox}>
              <h3>Getting Back Into CrossFit After Vacation</h3>
              <p>
              Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.
              </p>
            </div>
            <Button>
              READ MORE <Arrow />{" "}
            </Button>
          </div>
          <div className={styles.newsCard}>
            <p className={styles.date}>28.06.2022</p>
            <div className={styles.internTextbox}>
              <h3>Meet Fitness Ambassador Grace</h3>
              <p>
              Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.
              </p>
            </div>
            <Button>
              READ MORE <Arrow />{" "}
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TenthPart;
