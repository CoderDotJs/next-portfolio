import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navigation from "../components/Navigation/Index";
import styles from "../styles/Blogs.module.css";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>{`Akash's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.blogs}>
        <Navigation />
        <h1 className={styles.h1}>Blogs Coming Soon</h1>
        <Link href="/">
          <span className={styles.btn}>/ home</span>
        </Link>
      </div>
    </>
  );
};

export default Blogs;
