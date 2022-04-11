import "../styles/globals.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <div className="h-screen w-full bg-[#000] fixed inset-0 z-[-1]">
          <span className="absolute top-[-7rem] lg:top-[-80%] lg:right-[25vw] h-[200px] w-full lg:h-[600px] lg:w-[600px] bg-gradient-to-r from-[#0719b9] to-[#EE5DB4] filter blur-[100px] opacity-80 rounded-full"></span>
        </div>

        <NextNProgress color="#F5095F" />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
