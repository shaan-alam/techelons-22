import "../styles/globals.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <div className="bg_stars"></div>
        {/* <div className="h-screen bg-[#000] fixed inset-0 z-[-1]">
          <span className="absolute top-[-10%] lg:top-[-40%] lg:right-[25vw] h-[200px] w-[90%] lg:h-[400px] lg:w-[600px] bg-gradient-to-r from-[#0719b9] to-[#EE5DB4] filter blur-[100px] opacity-80 rounded-full"></span>
        </div> */}
        <NextNProgress color="#F5095F" />
        <Component {...pageProps} />
        <div className="bg_stars"></div>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
