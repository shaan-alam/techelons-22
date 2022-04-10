import { Event } from "../../containers/Events/types";
import LazyImage from "react-lazy-blur-image";
import eventStyles from "./Event.module.scss";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <div className={eventStyles.event}>
      <LazyImage
        placeholder={event.poster}
        uri={event.poster}
        render={(src, style) => <img src={src} style={style} />}
      />
      <div className={eventStyles.event_body}>
      <h4>{event.name}</h4>
        <p>{event.tagLine}</p>
      </div>
    </div>
  );
};

export default EventCard;