import { useEffect, useState } from "react";
import { Button } from "../../components";
import heroStyles from "./Hero.module.scss";
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
          <svg
            width="50"
            height="50"
            viewBox="0 0 226 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.1349 72.7741V74.7741H77.1349H98.3464V166.377L3.46373 2H222.056L126.923 166.812V74.7741H148.135H150.135V72.7741V47.5089V45.5089H148.135H77.1349H75.1349V47.5089V72.7741Z"
              stroke="#333"
              strokeWidth="8"
            />
          </svg>
        </div>
      )}
      <section id="home" className={heroStyles.home}>
        <main className={heroStyles.container}>
          <Parallax speed={-14} scale={[0.4, 1, "easeIn"]}>
            <div className={heroStyles.bg_image}>
              <img src="./images/mars.webp" alt="Mars" />
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
