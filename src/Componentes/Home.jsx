import React from "react";
import AboutLeft from "./AboutLeft";
import styles from "./Home.module.css";
import PrincipalHome from "./PrincipalHome";
import SecondPart from "./SecondPart";

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
      <PrincipalHome />
      <SecondPart />
    </section>
  );
};

export default Home;
