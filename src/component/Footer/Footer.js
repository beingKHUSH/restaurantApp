import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Copyright © 2020 FoodClub All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
