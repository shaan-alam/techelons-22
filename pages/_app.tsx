import "../styles/globals.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <NextNProgress color="#F5095F" />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
