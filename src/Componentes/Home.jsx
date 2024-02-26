import React from "react";
import AboutLeft from "./HomeParts/AboutLeft";
import styles from "./Home.module.css";
import PrincipalHome from "./HomeParts/PrincipalHome";
import SecondPart from "./HomeParts/SecondPart";
import ThirdPart from "./HomeParts/ThirdPart";
import FourthPart from "./HomeParts/FourthPart";
import FifthPart from "./HomeParts/FifthPart";

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
      <ThirdPart />
      <FourthPart />
      <FifthPart/>
    </section>
  );
};

export default Home;
