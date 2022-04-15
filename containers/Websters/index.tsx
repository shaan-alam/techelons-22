import { motion } from "framer-motion";
import { pageTransition } from "../../animations";
import aboutStyles from "./About.module.scss";
import BlockContent from "@sanity/block-content-to-react";

interface About {
  name: string;
  about: Record<any, any>;
}

interface Props {
  about: About;
}

const About = ({ about }: Props) => {
  return (
    <motion.section
      className={aboutStyles.container}
      variants={pageTransition}
      initial="hidden"
      animate="visible"
    >
      <h1>About Us</h1>
      <div className={aboutStyles.about_websters}>
        <div className={aboutStyles.websters}>
          <img src="./images/websters_logo.webp" alt="Websters" />
        </div>
        <div className={aboutStyles.intro_text}>
          <BlockContent
            blocks={about.about}
            projectId="axxb6ocs"
            dataset="production"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
