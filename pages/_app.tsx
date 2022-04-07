import { Navbar } from "../components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <div className="h-screen w-full absolute inset-0 overflow-hidden">
        <span className="bg-[#36B1E2] opacity-80 absolute sm:top-0 sm:-left-28 top-11 -left-24 filter sm:blur-[200px] h-[250px] w-[250px] blur-[40px] sm:h-[400px] sm:w-[400px] rounded-full"></span>
        <span className="bg-[#FF02A1] opacity-80 absolute sm:top-0 sm:-right-28 top-11 -right-24 filter sm:blur-[200px] h-[250px] w-[250px] blur-[40px] sm:h-[400px] sm:w-[400px] rounded-full"></span>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
