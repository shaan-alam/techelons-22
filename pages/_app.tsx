import { Navbar } from "../components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <div className="h-screen w-full absolute inset-0 overflow-hidden">
        <span className="bg-[#36B1E2] opacity-40 absolute top-0 -left-28 filter blur-[100px] h-[400px] w-[400px] rounded-full"></span>
        <span className="bg-[#FF02A1] opacity-40 absolute top-0 -right-28 filter blur-[100px] h-[400px] w-[400px] rounded-full"></span>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
