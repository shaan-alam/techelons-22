import Link from "next/link";
import eventStyles from "./Events.module.scss";
import LazyImage from "react-lazy-blur-image";
import { Parallax } from "react-scroll-parallax";
import { Props } from "./types";

const Events = ({ events }: Props) => {
  return (
    <section className={eventStyles.container} id="events">
      <h1>Our Events</h1>
      <Parallax speed={-20} className={eventStyles.parallax_container}>
        <h2>WEBSTERS</h2>
      </Parallax>
      <div className={eventStyles.events}>
        {events.map((event) => (
          <Parallax speed={Math.random() * 5 + 10} key={event.name}>
            <Link href={`/events/${event.slug}`}>
              <div className={eventStyles.event}>
                <LazyImage
                  placeholder={event.poster}
                  uri={event.poster}
                  render={(src, style) => <img src={src} style={style} />}
                />
                <h4>{event.name}</h4>
              </div>
            </Link>
          </Parallax>
        ))}
      </div>
    </section>
  );
};

export default Events;
