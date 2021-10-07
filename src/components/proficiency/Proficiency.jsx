import React from "react";
import styles from "./Proficiency.module.css";
import frontend from "../../assets/fd.png";
import backend from "../../assets/bd.png";
import dsa from "../../assets/ds-removebg-preview.png";

const Proficiency = () => {
  let data = [
    {
      title: "Frontend",
      image: frontend,
    },
    {
      title: "DS & Algo",
      image: dsa,
    },
    {
      title: "Backend",
      image: backend,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Proficiency</div>
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

export { Proficiency };
