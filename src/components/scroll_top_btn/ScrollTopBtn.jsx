import React from "react";
import styles from "./ScrollTopBtn.module.css";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTopBtn = () => {
  let [showBtn, setShowBtn] = React.useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowBtn = () => {
    if (window.pageYOffset > 300) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleShowBtn);
  });

  return (
    <>
      {showBtn && (
        <div className={styles.container} onClick={handleScroll}>
          <IoIosArrowUp size='1.7em' className={styles.icon} />
        </div>
      )}
    </>
  );
};

export { ScrollTopBtn };
