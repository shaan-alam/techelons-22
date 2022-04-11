import { useEffect, useState } from "react";
import { Button } from "../../components";
import { motion } from "framer-motion";
import heroStyles from "./Hero.module.scss";
import { container, item } from "./constants";
import { v4 } from "uuid";
import { Link } from "react-scroll";
import Tilt from "react-parallax-tilt";

interface Quote {
  author: string;
  en: string;
}

const Hero = () => {
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    fetch("https://programming-quotes-api.herokuapp.com/Quotes/random")
      .then((res) => res.json())
      .then((res) => setQuote(res));
  }, []);

  return (
    <section id="home">
      <main className={heroStyles.container}>
        <motion.div
          className={heroStyles.bg_backdrop}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1.5, ease: [0.3, 0.4, 0.6, 0.2] }}
        ></motion.div>
        <div className={heroStyles.hero}>
          <div className={heroStyles.left}>
            <h1 className={heroStyles.intro_title}>
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
              className={heroStyles.main_title}
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
              className={heroStyles.intro_text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              {quote?.en}
              <blockquote>- {quote?.author}</blockquote>
            </motion.p>
            <div className={heroStyles.cta}>
              <Link to="events" smooth={true}>
                <Button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4 }}
                >
                  Check Out Our Events
                </Button>
              </Link>
            </div>
          </div>
          <div className={heroStyles.right}>
            <Tilt>
              <img
                src="./images/small_logo.svg"
                alt="Techelons"
                className="w-full"
              />
            </Tilt>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
