import React from "react";
import styles from "./Header.module.css";
import resumeSvg from "../../assets/resume.svg"

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stand out
        </p>
        <p className={styles.heading}>
          and make yours <span>for free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
