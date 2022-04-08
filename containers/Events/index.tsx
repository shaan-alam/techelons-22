import eventStyles from "./Events.module.scss";

const Events = () => {
  return (
    <section className={eventStyles.container}>
      <h1>Our Events</h1>
      <div className={eventStyles.events}>
        <div className={eventStyles.event}>
          <img src="./images/poster.jpeg" alt="" className="w-1/2" />
          <h4>Data Divination</h4>
        </div>
        <div className={eventStyles.event}>
          <img src="./images/poster.jpeg" alt="" className="w-1/2" />
          <h4>IT Quiz</h4>
        </div>
        <div className={eventStyles.event}>
          <img src="./images/poster.jpeg" alt="" className="w-1/2" />
          <h4>Googler</h4>
        </div>
        <div className={eventStyles.event}>
          <img src="./images/poster.jpeg" alt="" className="w-1/2" />
          <h4>Dumb Charades</h4>
        </div>
      </div>
    </section>
  );
};

export default Events;
