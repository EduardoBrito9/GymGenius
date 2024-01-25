import React, { useRef } from "react";
import styles from "./AboutLeft.module.css";

const AboutLeft = ({ informations }) => {
  const aboutRef = useRef();
  React.useEffect(() => {
    if (informations) {
      console.log(aboutRef);
      aboutRef.current.classList.add(`${styles.aboutLeft}`);
      aboutRef.current.classList.remove(`${styles.closedAbout}`);
    } else if (!informations) {
      aboutRef.current.classList.add(`${styles.closedAbout}`);
    }
  }, [informations]);

  return (
    <section>
      <div ref={aboutRef} className={`${styles.aboutLeft} `}>
        Menuuuuuuuuuuu
      </div>
    </section>
  );
};

export default AboutLeft;
