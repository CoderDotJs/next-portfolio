import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "../components/About/Index";
import Banner from "../components/Banner/Index";
import Contact from "../components/Contact/Index";
import Footer from "../components/Footer/Index";
import Navigation from "../components/Navigation/Index";
import Projects from "../components/Projects/Index";
import Skills from "../components/Skills/Index";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Akash's Portfolio`}</title>
      </Head>

      <main className={styles.main}>
        <Banner></Banner>
        <Navigation></Navigation>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}
