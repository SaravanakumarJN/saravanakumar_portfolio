import styles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectCard = ({
  item: { image, about, links, title, tech_stack, badge },
}) => {
  let [git, demo] = links;
  tech_stack = tech_stack.join(" | ");
  let interval = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  interval += 5000;

  let handleGit = () => {
    window.open(git);
  };

  let handleLiveDemo = () => {
    window.open(demo);
  };

  return (
    <div className={styles.card}>
      {badge ? (
        <>
          <div className={styles.card_badge_bottom}></div>
          <div className={styles.card_badge_top}>{badge}</div>
        </>
      ) : null}
      <div className={styles.title}>{title}</div>
      <div className={styles.image}>
        <Carousel
          autoPlay
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          interval={interval}
        >
          {image.map((item, i) => {
            return <img key={i} src={item.src} alt={item.alt} />;
          })}
        </Carousel>
      </div>
      <div className={styles.about}>
        <div>{about}</div>
      </div>
      <div className={styles.stack}>Tech Stack : {tech_stack}</div>
      <div className={styles.link}>
        <button className={styles.git_button} onClick={handleGit}>
          <span className={styles.card_button_icon}>
            <FaGithub size='1.1em' />
          </span>
          Code
        </button>
        <button className={styles.demo_button} onClick={handleLiveDemo}>
          <span className={styles.card_button_icon}>
            <BiLinkExternal size='1.1em' />
          </span>
          Live
        </button>
      </div>
    </div>
  );
};

export { ProjectCard };
