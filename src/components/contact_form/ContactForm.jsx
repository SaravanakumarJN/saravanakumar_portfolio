import React from "react";
import styles from "./ContactForm.module.css";
import { GrMail } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { sendMessage } from "../../utilities/sendMessage";

const ContactForm = () => {
  let [isSending, setIsSending] = React.useState(false);
  let [sentStatus, setSentStatus] = React.useState(null);
  let timeoutRef = React.useRef(null);

  const details = {
    mail: "kumarjnsaravana@gmail.com",
    mobile: "+91 8098806664",
  };
  const { mail, mobile } = details;

  const handleMail = () => {
    window.open(`mailto:${mail}`);
  };

  const handleAlert = (status) => {
    setSentStatus(status);
    timeoutRef.current = setTimeout(() => {
      setSentStatus(null);
    }, 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    sendMessage(e.target)
      .then(
        (res) => {
          e.target.reset();
          handleAlert(true);
        },
        (error) => {
          handleAlert(false);
        }
      )
      .catch((error) => {
        handleAlert(false);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleGithub = () => {
    window.open("https://github.com/SaravanakumarJN");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/saravanakumar-nagaraj/");
  };

  const handleTwitter = () => {
    window.open("https://twitter.com/Saravana_JN");
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.left_header}>
          <div className={styles.left_header_l1}>Have an idea?</div>
          <div className={styles.left_header_l2}>Let's connect!</div>
        </div>
        <div className={styles.left_content}>
          <div
            className={`${styles.icon_text} ${styles.mail}`}
            onClick={handleMail}
          >
            <GrMail size='1.6em' />
            <span>{mail}</span>
          </div>
          <div className={styles.icon_text}>
            <ImPhone size='1.6em' />
            <span>{mobile}</span>
          </div>
          <div className={styles.connect}>
            <FaGithub onClick={handleGithub} size='1.8em' />
            <FaLinkedin onClick={handleLinkedin} size='1.8em' />
            <FaTwitter onClick={handleTwitter} size='1.8em' />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleFormSubmit}>
          <div className={styles.form_elements}>
            <div>Email</div>
            <input type='email' name='email' required={true} />
          </div>
          <div className={styles.form_elements}>
            <div>Subject</div>
            <input type='text' name='subject' />
          </div>
          <div className={styles.form_elements}>
            <div>Message</div>
            <textarea name='message' rows='7' required={true} />
          </div>
          <div className={styles.form_elements} disabled={isSending}>
            {sentStatus === null ? null : sentStatus === false ? (
              <div className={styles.red_alert}>Something went wrong</div>
            ) : (
              <div className={styles.green_alert}>Sent successfully</div>
            )}
            <button
              style={{ backgroundColor: isSending ? "#b3cccc" : "#51989d" }}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ContactForm };
