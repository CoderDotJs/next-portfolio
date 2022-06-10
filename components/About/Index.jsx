import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import styles from "../../styles/About.module.css";

const About = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div
      id="about"
      className={styles.about}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <h1 className={styles.about_heading}>/ about me</h1>
      <div className={styles.about_col}>
        <div className={styles.about_desc}>
          <p>
            I am currently studying <b>Telecommunication Engineering</b> at{" "}
            <b>Tangail Polytechnic Institute</b>, with a focus in Web
            Development.
            <br />
            <br />I am a self-motivated <b>Frontend Web developer</b> with huge
            knowledge and proficiency in this section, as well as strong skills
            and ability in writing clean and efficient code. I am Skilled in
            HTML, CSS, JavaScript, React, MongoDB, NodeJS. My passion is to
            learn new Technologies. My aim is to be a{" "}
            <b>Full Stack Web Developer</b>.
          </p>
        </div>
        <div className={styles.about_pic}>
          <Image
            src="https://i.postimg.cc/hvnwLPJw/88336029-780288345827384-5947601403613544448-n.jpg"
            alt="about-me"
            className={styles.img}
            height={285}
            width={285}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
