import styles from "./Techelons.module.scss";
import Tilt from "react-parallax-tilt";

const Techelons = () => {
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
          <p>
            It gives us immense pleasure to inform you that the Department of
            Computer Science, Shivaji College; University of Delhi is organizing
            its Annual technical festival Techelons'2022 on 20th and 21st April
            2022. The festival attracts students from colleges all over India to
            compete and showcase their talent. Over the year students from DTU,
            IITs, NSIT, DU MCA, IIITs, BHU, IPU, and affiliated colleges of the
            University of Delhi have actively participated in our technical
            festival. This will be the ninth edition of Techelons, the Annual
            Computer Science Fest of the College. The festival is a forum for
            similar minds to interact, share and discuss the latest happenings
            in the field of computers and help the growth of computer science.
            The festival offers a mix of technical and non-technical events.
            Technical events include IT Quiz, Data Divination, and Techno Heads
            up. we have non- technical events also which is Googler. The success
            of the event depends on the generous support of our sponsors to help
            fulfill and be associated with the event in a variety of ways
            including monetary funds, sponsor prizes, events, goodies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Techelons;
