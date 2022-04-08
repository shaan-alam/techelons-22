import "../styles/globals.scss";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <Component {...pageProps} />
        
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
