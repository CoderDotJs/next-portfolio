import Aos from "aos";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../../styles/ProjectCard.module.css";

const ProjectCard = (props) => {
  const { id, name, desc, techStack, link, open } = props.prop;

  useEffect(() => {
    Aos.init({});
  }, []);

  const randomNum = () => {
    return Math.floor(Math.random() * 400) + 10;
  };

  return (
    <div
      className={styles.card}
      data-aos="fade-up"
      data-aos-duration={400 + randomNum()}
    >
      <div className={styles.card_header}>
        <i className={`far fa-folder fa-2x ${styles.folder}`}></i>
        <div className={styles.inner_card_header}>
          <a href={link} target="_blank" rel="noreferrer">
            <i className={`fab fa-github ${styles.github}`}></i>
          </a>
          <a href={open} target="_blank" rel="noreferrer">
            <i className={`fas fa-external-link-alt ${styles.link_alt}`}></i>
          </a>
        </div>
      </div>
      <Link href={`/projects/${id}`} style={{ textDecoration: "none" }}>
        <div className={styles.card_body}>
          <h1 className={styles.card_heading}>{name}</h1>
          <p className={styles.card_text}>
            {desc ? `${desc.slice(0, 100)}...` : "Nothing"}
          </p>
          <p className={styles.card_techStack}>
            <b>Technologies:</b> {techStack}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
