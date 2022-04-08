import eventStyles from "./Events.module.scss";
import LazyImage from "react-lazy-blur-image";

const Events = () => {
  return (
    <section className={eventStyles.container}>
      <h1>Our Events</h1>
      <div className={eventStyles.events}>
        <div className={eventStyles.event}>
          <LazyImage
            placeholder={"./images/poster.jpeg"}
            uri={"./images/poster.jpeg"}
            render={(src, style) => <img src={src} style={style} />}
          />
          <h4>Data Divination</h4>
        </div>
        <div className={eventStyles.event}>
          <LazyImage
            placeholder={"./images/poster.jpeg"}
            uri={"./images/poster.jpeg"}
            render={(src, style) => <img src={src} style={style} />}
          />
          <h4>IT Quiz</h4>
        </div>
        <div className={eventStyles.event}>
          <LazyImage
            placeholder={"./images/poster.jpeg"}
            uri={"./images/poster.jpeg"}
            render={(src, style) => <img src={src} style={style} />}
          />
          <h4>Googler</h4>
        </div>
        <div className={eventStyles.event}>
          <LazyImage
            placeholder={"./images/poster.jpeg"}
            uri={"./images/poster.jpeg"}
            render={(src, style) => <img src={src} style={style} />}
          />
          <h4>Dumb Charades</h4>
        </div>
      </div>
    </section>
  );
};

export default Events;
