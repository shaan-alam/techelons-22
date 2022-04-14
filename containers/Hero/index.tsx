import { useEffect, useState } from "react";
import { Button } from "../../components";
import { motion } from "framer-motion";
import heroStyles from "./Hero.module.scss";
import { container } from "./constants";
import { v4 } from "uuid";
import { Link } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

interface Quote {
  author: string;
  en: string;
}

const Hero = () => {
  const [quote, setQuote] = useState<Quote>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://programming-quotes-api.herokuapp.com/Quotes/random")
      .then((res) => res.json())
      .then((res) => {
        setQuote(res);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && (
        <div className={heroStyles.loading}>
          <img
            src="./images/techelons_loading.svg"
            alt="Techelons"
            className="h-20 w-20"
          />
        </div>
      )}
      <section id="home" className={heroStyles.home}>
        <div className="bg_stars"></div>
        <main className={heroStyles.container}>
          <Parallax speed={-14} scale={[0.4, 1, "easeIn"]}>
            <div className={heroStyles.bg_image}>
              <img src="./images/mars.png" alt="" />
            </div>
          </Parallax>
          <div className={heroStyles.hero}>
            <div className={heroStyles.hero_Contents}>
              <Parallax speed={2}>
                <h1 className={heroStyles.intro_title}>
                  Websters - The Computer Science Society of Shivaji College
                  Presents
                </h1>
              </Parallax>
              <Parallax scale={[0.5, 1, "ease"]} speed={-10}>
                <h1 className={heroStyles.main_title}>
                  {"TECHELONS'22".split("").map((ch) => (
                    <span key={v4()}>{ch}</span>
                  ))}
                </h1>
              </Parallax>
              <Parallax speed={-10} opacity={[9, 0, "ease"]}>
                <p className={heroStyles.intro_text}>
                  {quote?.en}
                  <blockquote>- {quote?.author}</blockquote>
                </p>
              </Parallax>
              <Parallax opacity={[10, 0, "easeInOutCirc"]}>
                <div className={heroStyles.cta}>
                  <Link to="events" smooth={true}>
                    <Button transition={{ delay: 2.4 }}>
                      Check Out Our Events
                    </Button>
                  </Link>
                </div>
              </Parallax>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;
