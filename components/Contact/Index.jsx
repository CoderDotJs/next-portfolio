import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c9zqkub",
        "template_5njk9ih",
        e.target,
        "user_keHwwIitJO7XRWSm4GzhB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          setMessage("Message not sent");
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.screen_body}>
        <div className={`${styles.screen_body_item} ${styles.left}`}>
          <div className={styles.app_title}>
            <span>contact</span>
            <span>me</span>
          </div>
          <div className={styles.app_contact}>
            CONTACT INFO : +8801985879316
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.screen_body_item}>
            <div className={styles.app_form}>
              <div className={styles.app_form_group}>
                <input
                  className={`${styles.input} ${styles.app_form_control}`}
                  name="fullName"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className={styles.app_form_group}>
                <input
                  className={`${styles.input} ${styles.app_form_control}`}
                  name="email"
                  type="email"
                  placeholder="email"
                  required
                />
              </div>
              <div className={`${styles.app_form_group} ${styles.message}`}>
                <input
                  className={`${styles.input} ${styles.app_form_control}`}
                  name="message"
                  type="text"
                  placeholder="Messeges"
                  required
                />
              </div>

              {message && (
                <p style={{ color: "rgb(100, 255, 218)" }}>{message}</p>
              )}
              <div className={`${styles.app_form_group} ${styles.buttons}`}>
                <button
                  className={`${styles.button} ${styles.app_form_button}`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
