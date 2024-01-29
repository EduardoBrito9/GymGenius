import React, { useRef } from "react";
import styles from "./AboutLeft.module.css";
import Close from "../../images/Close.svg?react";

const AboutLeft = ({ informations, setInformations}) => {
  const aboutRef = useRef();

  React.useEffect(() => {
    if (informations) {
      aboutRef.current.classList.remove(`${styles.closedAbout}`);
      aboutRef.current.classList.add(`${styles.aboutLeft}`);
    } else if (!informations) {
      aboutRef.current.classList.add(`${styles.closedAbout}`);
    }
  }, [informations, setInformations]);

  function close() {
    setInformations(false);
  }

  return (
    <section ref={aboutRef} className="check">
      <div className={styles.init}>
        <img src="../Images/gymweight.png" alt="" />
        <button className={styles.buttonClose}>
          <Close onClick={close} />
        </button>
      </div>
      <div className={styles.aboutPart}>
        <h3>About us</h3>
        <p>
          Find out who we are and what makes us unique. We are a
          community-driven gym committed to providing personalized fitness
          experiences for all levels of fitness enthusiasts in a welcoming and
          supportive environment.
        </p>
      </div>
    </section>
  );
};

export default AboutLeft;
