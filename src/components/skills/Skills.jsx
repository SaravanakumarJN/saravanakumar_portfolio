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
  let data = [
    {
      title: "HTML",
      image: html,
    },
    {
      title: "CSS",
      image: css,
    },
    {
      title: "Javascript",
      image: javascript,
    },
    {
      title: "React",
      image: react,
    },
    {
      title: "Redux",
      image: redux,
    },
    {
      title: "NodeJS",
      image: nodejs,
    },
    {
      title: "ExpressJS",
      image: expressjs,
    },
    {
      title: "MongoDB",
      image: mongodb,
    },
    {
      title: "Github",
      image: github,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Tecchnology & Tools</div>
      <div className={styles.aligner}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.listItem}>
              <img src={item.image} alt={item.title} />
              <div className={styles.title}>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Skills };
