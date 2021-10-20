import React from "react";
import styles from "./Header.module.css";
import user from "../../assets/Saravana.png";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Header = () => {
  const handleGithub = () => {
    window.open("https://github.com/SaravanakumarJN");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/saravanakumar-nagaraj/");
  };

  const handleTwitter = () => {
    window.open("https://twitter.com/Saravana_JN");
  };

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1udRIEFBUY6YfWihdJcGHXt0DFZXp2soA/view?usp=sharing"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            Hi, I am <br />
            <ScrollAnimation
              duration={2}
              animateOnce={true}
              animateIn='flipInY'
            >
              Saravanakumar Nagaraj
            </ScrollAnimation>
          </div>
          <div className={styles.description}>
            Learner | Full Stack Web Developer
          </div>
          <div>
            <button onClick={handleResume}>Resume</button>
          </div>
          <div className={styles.connect}>
            <FaGithub onClick={handleGithub} size='1.5em' />
            <FaLinkedin onClick={handleLinkedin} size='1.5em' />
            <FaTwitter onClick={handleTwitter} size='1.5em' />
          </div>
        </div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <img src={user} alt='User Pic' />
        </div>
      </div>
    </div>
  );
};

export { Header };
