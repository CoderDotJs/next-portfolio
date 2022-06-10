import "../styles/globals.css";
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useGeo from "../hooks/useGeo";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const { geolocation } = useGeo();
  console.log(
    "🚀 ~ file: index.js ~ line 14 ~ Home ~ geolocation",
    geolocation
  );
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        innerAlpha={1}
        innerScale={1}
        color="100, 255, 218"
        outerScale={1.5}
        trailingSpeed={8}
      />
      <Head>
        <meta
          name="description"
          content="I am Md Johirul Islam Akash. I am a MERN Stack Developer. I Developer React Web Apps. Visit My Portfolio To Explore My Works. "
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="This is the Portfolio of a Developer.I am a Web Developer based in Dhaka, Bangladesh.I am a MERN Stack Developer. Contact me at md.akash6724@gmail.com"
        />
        <meta name="author" content="Akash's Web Developer Postfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="https://i.ibb.co/9g6vJz7/img.png" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
