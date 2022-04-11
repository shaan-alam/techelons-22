import { Parallax } from "react-scroll-parallax";
import {
  code,
  laptop,
  drive,
  cpu,
} from "../../assets/images";

const ParallaxImages = () => {
  return (
    <>
      <Parallax
        speed={-20}
        rotate={[-100, 20]}
        rotateZ={[-100, 20]}
        className="absolute top-[34rem] left-[5rem] md:left-[14rem] -z-50"
      >
        <img src={code} alt="Code" className="opacity-20 w-10 sm:w-16" />
      </Parallax>
      <Parallax
        speed={10}
        rotate={[-100, 100]}
        rotateZ={[-100, 100]}
        className="absolute top-[40rem] right-[2rem] md:right-[14rem] -z-50"
      >
        <img src={cpu} alt="cpu" className=" opacity-20 w-20" />
      </Parallax>
      <Parallax
        speed={30}
        className="absolute w-20 sm:2-24 top-[78rem] right-[3rem] sm:right-[12rem]"
      >
        <img src={laptop} alt={laptop} className="opacity-30 h-20" />
      </Parallax>
      <Parallax speed={-20} className="absolute top-[71rem] left-[12rem]">
        <img src={drive} alt="drive" className="opacity-30 h-10" />
      </Parallax>

      <Parallax
        speed={-30}
        scale={[0.1, 2, "ease"]}
        className="absolute top-[120rem] right-[3rem] -z-50"
      >
        <h2 className="font-bold font-montserrat text-gray-600 opacity-[30%] text-[1rem]">
          WEBSTERS
        </h2>
      </Parallax>
    </>
  );
};

export default ParallaxImages;
