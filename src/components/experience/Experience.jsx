import React from "react";
import styles from "./Experience.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";
import { FaBookReader } from "react-icons/fa";

const Experience = () => {
  const style = {
    contentStyle: {
      border: "1px solid #e5e5e5",
      boxShadow: "none",
    },
    iconStyle: {
      background: "#51989d",
      color: "#fff",
      // width: "30px",
      // height: "30px",
      // borderRadius: "50%",
      // margin: "1.4% 0 0 -1.5%",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Experience & Education</div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={style.contentStyle}
            date='April, 2021 - present'
            iconStyle={style.iconStyle}
            icon={<CgWorkAlt />}
          >
            <h3>Instructional Associate | Developer</h3>
            <h4>Masai School, Bangalore</h4>
            <p className={styles.content_p}>
              Roles and Responsibilities,
              <br />
              - Building and maintaining internal applications
              <br />
              - Clearing students conceptual doubts via standups and pair
              programming, reviewing students projects.
              <br />
              - Reporting to the instructor and delivering lectures whenever
              required.
              <br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={style.contentStyle}
            date='October, 2020 - April, 2021'
            iconStyle={style.iconStyle}
            icon={<FaBookReader />}
          >
            <h3>Full Stack Web Development (Trainee)</h3>
            <h4>Masai School, Bangalore</h4>
            <p className={styles.content_p}>
              Worked extensively on,
              <br />
              - MERN Stack
              <br />
              - Data Structure and Algorithms
              <br />
              - Soft skills
              <br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export { Experience };
