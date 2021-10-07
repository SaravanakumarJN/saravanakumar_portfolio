import React from "react";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ handleSectionScroll }) => {
  const [verticalOpen, setVerticalOpen] = React.useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <div
          className={styles.logo}
          onClick={() => {
            setVerticalOpen(false);
            handleScroll();
          }}
        >
          SN
        </div>
        <div className={styles.grow}></div>
        <div className={styles.horizontal_nav}>
          <div
            className={styles.nav_links}
            onClick={() => {
              setVerticalOpen(false);
              handleSectionScroll("about");
            }}
          >
            About
          </div>
          <div
            className={styles.nav_links}
            onClick={() => {
              setVerticalOpen(false);
              handleSectionScroll("experience");
            }}
          >
            Experience
          </div>
          <div
            className={styles.nav_links}
            onClick={() => {
              setVerticalOpen(false);
              handleSectionScroll("skills");
            }}
          >
            Skills
          </div>
          <div
            className={styles.nav_links}
            onClick={() => {
              setVerticalOpen(false);
              handleSectionScroll("projects");
            }}
          >
            Projects
          </div>
        </div>
        <div
          className={styles.vertical_nav_icon}
          onClick={() => {
            setVerticalOpen(!verticalOpen);
          }}
        >
          {!verticalOpen ? (
            <AiOutlineMenu size='1.5em' />
          ) : (
            <AiOutlineClose size='1.5em' />
          )}
        </div>
      </div>
      <div
        className={styles.drop_down_container}
        style={{
          height: verticalOpen ? "290px" : "0px",
        }}
      >
        <div
          className={styles.nav_links}
          onClick={() => {
            setVerticalOpen(false);
            handleSectionScroll("about");
          }}
        >
          About
        </div>
        <div
          className={styles.nav_links}
          onClick={() => {
            setVerticalOpen(false);
            handleSectionScroll("experience");
          }}
        >
          Experience
        </div>
        <div
          className={styles.nav_links}
          onClick={() => {
            setVerticalOpen(false);
            handleSectionScroll("skills");
          }}
        >
          Skills
        </div>
        <div
          className={styles.nav_links}
          onClick={() => {
            setVerticalOpen(false);
            handleSectionScroll("projects");
          }}
        >
          Projects
        </div>
      </div>
    </div>
  );
};

export { Navbar };
