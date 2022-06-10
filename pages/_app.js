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
