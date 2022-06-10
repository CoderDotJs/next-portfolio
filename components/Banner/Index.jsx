import React from "react";
import styles from "../../styles/Banner.module.css";

const Banner = () => {
  return (
    <div id="home" className={styles.home}>
      <h1 className={styles.main_heading}>
        hi, <span className={styles.highlight}>akash</span> here.
      </h1>
      <h2 className={styles.sub_heading}>I create stuff sometimes.</h2>
      <p className={styles.desc}>
        {`I'm a web developer based in Dhaka, Bangladesh. I have profound interest
        in full-stack development, machine learning, human-computer
        interactions, and everything in between.`}
      </p>
      <div className={styles.buttons}>
        <a href="mailto:md.akash6724@gmail.com" className={styles.btn}>
          <i
            className="fas fa-envelope banner"
            style={{ color: "rgb(100, 255, 218)" }}
          >
            {" "}
          </i>{" "}
          Say hello
        </a>
        <a
          href="https://drive.google.com/file/d/1Qx4m_62SOmyMyx_SUlk6AXNm47fHsfff/view?usp=sharing"
          className={styles.btn}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-file"></i> Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
