import styles from "./Techelons.module.scss";
import Tilt from "react-parallax-tilt";
import BlockContent from "@sanity/block-content-to-react";

interface Props {
  about: {
    name: string;
    about: Record<any, any>;
  };
}
const Techelons = ({ about }: Props) => {
  return (
    <div className={styles.container}>
      <h1>About Techelons</h1>
      <div className={styles.about_techelons}>
        <div className={styles.logo}>
          <Tilt>
            <img src="./images/small_logo.svg" alt="Techelons" />
          </Tilt>
        </div>
        <div className={styles.about_techelons_text}>      
          <BlockContent
            blocks={about.about}
            projectId="axxb6ocs"
            dataset="production"
          />
        </div>
      </div>
    </div>
  );
};

export default Techelons;
