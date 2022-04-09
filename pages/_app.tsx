import "../styles/globals.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <NextNProgress color="#F5095F" />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
