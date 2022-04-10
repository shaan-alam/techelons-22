import Link from "next/link";
import Tilt from "react-parallax-tilt";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="image">
        <Tilt>
          <img
            src="./images/404.png"
            alt="Techelons"
            className="w-3/4 mx-auto"
          />
        </Tilt>
      </div>
      <div className="text text-sm sm:text-[1rem] mt-8 text-gray-400 font-montserrat text-center">
        <p>Oops...The page you are looking for is not found</p>
      </div>
      <div className="go-back">
        <Link href="/">
          <a className="text-[12px] sm:text-[1rem] block mt-4  px-6 py-3 rounded-md font-montserrat bg-gradient-to-r text-white font-semibold bg-[#121212]">
            Go Back and Register for Events 😎
          </a>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
