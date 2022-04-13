import { motion } from "framer-motion";
import { pageTransition } from "../../animations";
import aboutStyles from "./About.module.scss";

const About = () => {
  return (
    <motion.section
      className={aboutStyles.container}
      variants={pageTransition}
      initial="hidden"
      animate="visible"
    >
      <h1>About Us</h1>
      <div className={aboutStyles.about_grid}>
        <div className={aboutStyles.websters}>
          <img src="./images/websters_logo.png" alt="Websters" />
        </div>
        <div className={aboutStyles.intro_text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            itaque numquam nobis expedita dignissimos tenetur provident
            reiciendis illum autem, minus ipsum consequuntur, amet error et
            omnis iste dolores culpa facere.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            maiores recusandae aperiam vel autem repellat assumenda ipsam
            quibusdam ab quos, consequatur nam aut corrupti est, eius enim
            laudantium inventore dolorem.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
