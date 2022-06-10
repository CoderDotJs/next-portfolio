import Aos from "aos";
import React, { useEffect } from "react";
import styles from "../../styles/Skills.module.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div id="skills" className={styles.skills_wrapper}>
      <h1
        className={styles.skills_heading}
        data-aos="fade-up"
        data-aos-duration="300"
      >
        / skills
      </h1>

      <div
        className={styles.comfortable}
        data-aos="fade-up"
        data-aos-duration="472"
      >
        <h2 data-aos="fade-up" data-aos-duration="300">
          # comfortable
        </h2>
        <ul className={styles.skills_list}>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="310"
          >
            HTML & CSS
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="320"
          >
            JavaScript ES6+
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="330"
          >
            Bootstrap
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="340"
          >
            Tailwind CSS
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="350"
          >
            Material UI
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="360"
          >
            React Js
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="370"
          >
            React Router
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="380"
          >
            Firebase
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="390"
          >
            MongoDB
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="400"
          >
            Mongoose
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="410"
          >
            JSON
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="420"
          >
            REST API
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="430"
          >
            Responsive Web Design
          </li>
        </ul>
      </div>

      <div className="familiar" data-aos="fade-up" data-aos-duration="472">
        <h2 data-aos="fade-up" data-aos-duration="472">
          # familiar
        </h2>
        <ul className={styles.skills_list}>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="440"
          >
            Styled Components
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="450"
          >
            Redux
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="460"
          >
            Node Js (Basic)
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="470"
          >
            Express Js (Basic)
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="480"
          >
            React Native (Basic)
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="490"
          >
            Next Js (Basic)
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            SASS
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="510"
          >
            TypeScript
          </li>
        </ul>
      </div>

      <div className="tools" data-aos="fade-up" data-aos-duration="472">
        <h2 data-aos="fade-up" data-aos-duration="472">
          # tools
        </h2>
        <ul className={styles.skills_list}>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="520"
          >
            Heroku
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="530"
          >
            Netlify
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="540"
          >
            Github
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="550"
          >
            JWT Token
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="560"
          >
            Chrome Developer Tools
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="570"
          >
            Adobe XD
          </li>
          <li
            className={styles.skills}
            data-aos="fade-up"
            data-aos-duration="580"
          >
            Figma
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
