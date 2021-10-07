import React from "react";
import styles from "./Skills.module.css";
import html from "../../assets/html_5.svg";
import css from "../../assets/css_3.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import nodejs from "../../assets/nodejs-icon.svg";
import expressjs from "../../assets/express.svg";
import mongodb from "../../assets/mongodb.svg";
import github from "../../assets/github-icon.svg";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Tecchnology & Tools</div>
      <div className={styles.aligner}>
        <div className={styles.listItem}>
          <img src={html} alt='HTML' />
          <div>HTML</div>
        </div>
        <div className={styles.listItem}>
          <img src={css} alt='CSS' />
          <div className={styles.title}>CSS</div>
        </div>
        <div className={styles.listItem}>
          <img src={javascript} alt='Javascript' />
          <div className={styles.title}>Javascript</div>
        </div>
        <div className={styles.listItem}>
          <img src={react} alt='React' />
          <div className={styles.title}>React</div>
        </div>
        <div className={styles.listItem}>
          <img src={redux} alt='Redux' />
          <div className={styles.title}>Redux</div>
        </div>
        <div className={styles.listItem}>
          <img src={nodejs} alt='NodeJS' />
          <div className={styles.title}>NodeJS</div>
        </div>
        <div className={styles.listItem}>
          <img src={expressjs} alt='ExpressJS' />
          <div className={styles.title}>ExpressJS</div>
        </div>
        <div className={styles.listItem}>
          <img src={mongodb} alt='MongoDB' />
          <div className={styles.title}>MongoDB</div>
        </div>
        <div className={styles.listItem}>
          <img src={github} alt='Github' />
          <div className={styles.title}>Github</div>
        </div>
      </div>
    </div>
  );
};

export { Skills };
