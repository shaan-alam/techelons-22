import { Button, Logo } from "../../components";
import { motion } from "framer-motion";
import homeStyles from "../../styles/Home.module.scss";
import { container, item } from "./constants";
import { v4 } from "uuid";

const Hero = () => {
  return (
    <>
      <div className={homeStyles.bg_image}></div>
      <main className={homeStyles.container}>
        <motion.div
          className={homeStyles.bg_backdrop}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1.5, ease: [0.3, 0.4, 0.6, 0.2] }}
        ></motion.div>
        <div className={homeStyles.hero}>
          <div className={homeStyles.left}>
            <h1 className={homeStyles.intro_title}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
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
              transition={{ duration: 1.3 }}
            >
              {"TECHELONS'22".split("").map((ch) => (
                <motion.span variants={item} key={v4()}>
                  {ch}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className={homeStyles.intro_text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Websters - The Computer Science Society of Shivaji College was
              formed with one objective- unification of students of the Computer
              Science Department in a way that helps them grow through various
              activities and opportunities.
            </motion.p>
            <div className={homeStyles.cta}>
              <Button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              >
                Get Started
              </Button>
            </div>
          </div>
          <Logo />
        </div>
      </main>
    </>
  );
};

export default Hero;
