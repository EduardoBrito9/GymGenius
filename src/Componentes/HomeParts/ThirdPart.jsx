import React from "react";
import styles from "./ThirdPart.module.css";
import P from "../Elements/P";
import Title from "../Elements/Title";

const ThirdPart = () => {
  return (
    <section className={styles.thirdPart}>
      <section className={styles.internContainer}>
        <P>OUR FEATURED CLASS</P>
        <Title> We Are Offering Best Flexible Classes</Title>
        <div className={styles.typeWorkouts}>
          <div className={styles.workdiv}>
            <h1>Cycling</h1> <span>Wednesday: 9:00am-10:00am</span>
          </div>

          <div className={styles.workdiv}>
            <h1>Karate</h1> <span>Friday: 10:00am-11:00am</span>
          </div>

          <div className={styles.workdiv}>
            <h1>Power</h1> <span>Saturday: 9:00am-10:00am</span>
          </div>

          <div className={styles.workdiv}>
            <h1>Meditation</h1> <span>Friday: 1:00am-2:00pm</span>
          </div>

          <div className={styles.workdiv}>
            <h1>Cycling</h1> <span>Sunday: 6:00pm-7:00pm</span>
          </div>

          <div className={styles.workdiv}>
            <h1>Cycling</h1> <span>Monday: 4:00pm-5:00pm</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ThirdPart;
