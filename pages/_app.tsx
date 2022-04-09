import "../styles/globals.scss";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
