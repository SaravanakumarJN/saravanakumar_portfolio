import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "../project_card/ProjectCard";
import * as images from "../../assets/project_images";

const Projects = () => {
  const {
    practo1,
    practo2,
    practo3,
    practo4,
    goodreads1,
    goodreads2,
    goodreads3,
    goodreads4,
    masai_refresh1,
    masai_refresh2,
    masai_refresh3,
    masai_refresh4,
  } = images;

  let data = [
    {
      title: "Masai Refresh",
      image: [
        { src: masai_refresh1, alt: "Masai Refresh SS" },
        { src: masai_refresh2, alt: "Masai Refresh SS" },
        { src: masai_refresh3, alt: "Masai Refresh SS" },
        { src: masai_refresh4, alt: "Masai Refresh SS" },
      ],
      about:
        "A Quiz app for user to test their knowledge by taking quiz on the topic, of their choice. A comprehensive report is presented at the end of each quiz.",
      tech_stack: [
        "React",
        "Redux",
        "Styled components",
        "Material UI",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      links: [
        "https://github.com/masai-oss/Masai_Refresh",
        "https://refresh.masai.tech/login",
      ],
    },
    {
      title: "Practo Clone",
      image: [
        { src: practo1, alt: "Practo Clone SS" },
        { src: practo2, alt: "Practo Clone SS" },
        { src: practo3, alt: "Practo Clone SS" },
        { src: practo4, alt: "Practo Clone SS" },
      ],
      about: "An Online Doctor booking and consultation web application.",
      tech_stack: [
        "React",
        "Redux",
        "Material UI",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      links: [
        "https://github.com/SaravanakumarJN/Practo---Pentagon",
        "https://practo.netlify.app/",
      ],
    },
    {
      title: "Goodreads Clone",
      image: [
        { src: goodreads1, alt: "Goodreads clone SS" },
        { src: goodreads2, alt: "Goodreads clone SS" },
        { src: goodreads3, alt: "Goodreads clone SS" },
        { src: goodreads4, alt: "Goodreads clone SS" },
      ],
      about:
        "An Online Community for Book lovers where people can search and read books and also connect with people of similar interest.",
      tech_stack: ["React", "Redux", "Material UI", "Mock server"],
      links: [
        "https://github.com/SaravanakumarJN/Goodreads---Charlie",
        "https://goodreads-iota.vercel.app/",
      ],
    },
    // {
    //     title : ,
    //     image : ,
    //     about : ,
    //     links :,
    // }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Projects</div>
      <div className={styles.aligner}>
        {data?.map((item, i) => {
          return <ProjectCard key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export { Projects };
