import { Button, Logo } from "../../components";
import { motion } from "framer-motion";
import homeStyles from "../../styles/Home.module.scss";
import { container, item } from "./constants";
import { v4 } from "uuid";

const Hero = () => {
  return (
    <main className={homeStyles.container}>
      <div className="h-screen w-screen fixed inset-0">
        <span className="bg-[#36B1E2] opacity-40 absolute top-0 -left-28 filter blur-[100px] h-[400px] w-[400px] rounded-full"></span>
        <span className="bg-[#FF02A1] opacity-40 absolute top-0 -right-28 filter blur-[100px] h-[400px] w-[400px] rounded-full"></span>
      </div>
      <motion.div
        className={homeStyles.bg_backdrop}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 1.5, ease: [0.3, 0.4, 0.6, 0.2] }}
      ></motion.div>
      <div className={homeStyles.hero}>
        <div className={homeStyles.left}>
          <h1 className={homeStyles.intro_title}>
            <motion.div
              className=""
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.3, 0.4, 0.4, 0.3] }}
            >
              Websters - The Computer Science Society of Shivaji College
              Presents
            </motion.div>
          </h1>
          <motion.h1
            className={homeStyles.main_title}
            variants={container}
            initial="hidden"
            animate="animate"
          >
            {"TECHELONS'22".split("").map((ch) => (
              <motion.span variants={item} key={v4()}>
                {ch}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="font-josefin text-sm text-gray-300 mt-4 sm:w-3/4 text-center w-[90%] mx-auto sm:mx-0 sm:text-left leading-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Websters - The Computer Science Society of Shivaji College was
            formed with one objective- unification of students of the Computer
            Science Department in a way that helps them grow through various
            activities and opportunities.
          </motion.p>
          <div className="text-center sm:text-left">
            <Button
              className="mt-8 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <Logo />
      </div>
    </main>
  );
};

export default Hero;
