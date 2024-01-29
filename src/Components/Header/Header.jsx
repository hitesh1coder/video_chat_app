import React from "react";
import styles from "./header.module.css";
import Logo from "../../assets/images/meet_icon.png";
import userIocn from "../../assets/images/userIcon.jpeg";

const Header = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const day = date.toLocaleDateString();

  return (
    <header className={styles.container}>
      <div className={styles.logo_div}>
        <img src={Logo} alt="logo" />
        <h3>Meet</h3>
      </div>
      <div className={styles.info_div}>
        <p>
          {day} {currentTime}
        </p>
        <img src={userIocn} alt="user" />
      </div>
    </header>
  );
};

export default Header;
