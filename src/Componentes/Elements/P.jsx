import React from "react";
import styles from "./P.module.css";

const P = ({ children }) => {
  return <p className={styles.p}>{children}</p>;
};

export default P;
