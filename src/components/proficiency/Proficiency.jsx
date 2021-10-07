import React from "react";
import styles from "./Proficiency.module.css";
import frontend from "../../assets/fd.png";
import backend from "../../assets/bd.png";
import dsa from "../../assets/ds-removebg-preview.png";

const Proficiency = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Proficiency</div>
      <div className={styles.aligner}>
        <div className={styles.listItem}>
          <img src={frontend} alt='Frontend' />
          <div>Frontend</div>
        </div>
        <div className={styles.listItem}>
          <img src={dsa} alt='Data Structures and Algorithms' />
          <div className={styles.title}>DS & Algo</div>
        </div>
        <div className={styles.listItem}>
          <img src={backend} alt='Backend' />
          <div className={styles.title}>Backend</div>
        </div>
      </div>
    </div>
  );
};

export { Proficiency };
