import React from "react";
import styles from "./eleventh.module.css";
import Button from "../Elements/Button";

const Eleventh = () => {
  return (
    <section className={styles.eleventhPart}>
      <div className={styles.infFitnessTrainer}>
        <h1>Need a Fitness Trainer?</h1>
        <h3>
          <strong>Call:</strong> +123-456789
        </h3>
        <Button>PURCHASE NOW</Button>
      </div>
    </section>
  );
};

export default Eleventh;
