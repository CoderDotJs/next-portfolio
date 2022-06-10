import Link from "next/link";
import React from "react";
import styles from "../../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav_wrapper}>
      <div className={styles.nav}>
        <Link href="/#home">
          <span className={`${styles.highlight}  ${styles.nav_links}`}>
            /home
          </span>
        </Link>
        <Link href="/#skills">
          <span className={`${styles.highlight}  ${styles.nav_links}`}>
            /skills
          </span>
        </Link>
        <Link href="/blogs">
          <span className={`${styles.highlight}  ${styles.nav_links}`}>
            /blogs
          </span>
        </Link>
        <Link href="/#about">
          <span className={`${styles.highlight}  ${styles.nav_links}`}>
            /about
          </span>
        </Link>
        <Link href="/#projects">
          <span className={`${styles.highlight}  ${styles.nav_links}`}>
            /projects
          </span>
        </Link>
        <Link href="/#contact">
          <span className={`${styles.highlight}  ${styles.nav_links}`}>
            /contact
          </span>
        </Link>
      </div>
      <a href="https://github.com/CoderDotJs" target="_blank" rel="noreferrer">
        <i className={`fab fa-2x fa-github ${styles.github}`}></i>
      </a>
      <a
        href="https://www.linkedin.com/in/md-johirul-islam-akash-7310b6174/"
        target="_blank"
        rel="noreferrer"
      >
        <i className={`fab fa-2x fa-linkedin ${styles.linkedin}`}></i>
      </a>
      <a href="mailto:md.akash6724@gmail.com" target="_blank" rel="noreferrer">
        <i className={`fas fa-2x fa-envelope ${styles.envelope}`}></i>
      </a>
    </nav>
  );
};

export default Navigation;
