import LazyImage from "react-lazy-blur-image";
import eventStyles from "./Event.module.scss";
import { Props } from "./types";

/**
 * @name - EventCard
 * @description A card component that is used to render an event on the homepage
 * @param JSX An object of type {@link Props}
 * */
const EventCard = ({ event }: Props) => {
  return (
    <div className={eventStyles.event}>
      <div className={eventStyles.event_poster}>
        <LazyImage
          placeholder={event.poster}
          uri={event.poster}
          render={(src, style) => <img src={src} style={style} />}
        />
      </div>
      <div className={eventStyles.event_body}>
        <h4>{event.name}</h4>
        <p>{event.tagLine}</p>
      </div>
    </div>
  );
};

export default EventCard;
