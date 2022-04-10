import Link from "next/link";
import eventStyles from "./Events.module.scss";
import LazyImage from "react-lazy-blur-image";
import { Parallax } from "react-scroll-parallax";
import { Props } from "./types";
import { EventCard } from "../../components";

const Events = ({ events }: Props) => {
  const speeds = [1, 20, 20, 7];

  return (
    <section className={eventStyles.container} id="events">
      <h1>Our Events</h1>
      <div className={eventStyles.events}>
        {events.map((event, index) => (
          <Link href={`/events/${event.slug}`} key={event.slug}>
            <Parallax speed={speeds[index]}>
              <EventCard event={event} />
            </Parallax>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Events;
