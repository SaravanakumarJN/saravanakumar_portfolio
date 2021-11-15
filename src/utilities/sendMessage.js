import emailjs from "emailjs-com";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
  process.env;

function sendMessage(data) {
  return emailjs.sendForm(
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID,
    data,
    REACT_APP_USER_ID
  );
}

export { sendMessage };
