import Link from "next/link";
import eventStyles from "./Events.module.scss";
import LazyImage from "react-lazy-blur-image";
import { Parallax } from "react-scroll-parallax";

const Events = () => {
  return (
    <section className={eventStyles.container} id="events">
      <h1>Our Events</h1>
      <Parallax speed={-20} className={eventStyles.parallax_container}>
        <h2>🔥</h2>
      </Parallax>
      <div className={eventStyles.events}>
        <Parallax speed={1}>
          <Link href={"/events"}>
            <div className={eventStyles.event}>
              <LazyImage
                placeholder={"./images/poster.jpeg"}
                uri={"./images/poster.jpeg"}
                render={(src, style) => <img src={src} style={style} />}
              />
              <h4>Data Divination</h4>
            </div>
          </Link>
        </Parallax>

        <Parallax speed={3}>
          <Link href={"/events"}>
            <div className={eventStyles.event}>
              <LazyImage
                placeholder={"./images/poster.jpeg"}
                uri={"./images/poster.jpeg"}
                render={(src, style) => <img src={src} style={style} />}
              />
              <h4>IT Quiz</h4>
            </div>
          </Link>
        </Parallax>
        <Parallax speed={-2}>
          <Link href={"/events"}>
            <div className={eventStyles.event}>
              <LazyImage
                placeholder={"./images/poster.jpeg"}
                uri={"./images/poster.jpeg"}
                render={(src, style) => <img src={src} style={style} />}
              />
              <h4>Googler</h4>
            </div>
          </Link>
        </Parallax>
        <Parallax speed={3}>
          <Link href={"/events"}>
            <div className={eventStyles.event}>
              <LazyImage
                placeholder={"./images/poster.jpeg"}
                uri={"./images/poster.jpeg"}
                render={(src, style) => <img src={src} style={style} />}
              />
              <h4>Dumb Charades</h4>
            </div>
          </Link>
        </Parallax>
      </div>
    </section>
  );
};

export default Events;
