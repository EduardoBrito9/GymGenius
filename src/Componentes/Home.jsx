import React from "react";
import AboutLeft from "./AboutLeft";
import styles from "./Home.module.css";

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
    <div className={styles.home} onClick={checkingClick}>
      <AboutLeft
        informations={informations}
        setInformations={setInformations}
      />
    </div>
  );
};

export default Home;
