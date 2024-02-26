import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import User from "../../../images/user.svg?react";
import AboutUs from "../../../images/AboutUs.svg?react";
import Plus from "../../../images/Plus.svg?react";

const Header = ({ setInformations, informations }) => {
  function about() {
    setInformations(!informations);
  }
  return (
    <nav className={styles.navegation}>
      <img src="../Images/gymweight.png" alt="" />

      <ul className={styles.navItems}>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Schedule</NavLink>
        </li>
        <li>
          <NavLink>Gallery</NavLink>
        </li>
        <li>
          <NavLink>Blog</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
        <li>
          <NavLink>Pricing</NavLink>
        </li>
        <li>
          <NavLink>Classes</NavLink>
        </li>
      </ul>

      <div className={styles.userLog}>
        <div className={styles.userANDabout}>
          <User />
          <AboutUs onClick={about} />
        </div>

        <div className={styles.clientPlan}>
          <Plus /> <span>JOIN CLASS NOW</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
