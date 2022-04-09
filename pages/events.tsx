import eventStyles from "../styles/Events.module.scss";
import LazyImage from "react-lazy-blur-image";
import { Button, Navbar } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../animations";

const Events = () => {
  return (
    <>
      <Navbar />
      <motion.section
        className="h-auto"
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={eventStyles.container}>
          <div className={eventStyles.main_poster}>
            <LazyImage
              placeholder={"./images/poster.jpeg"}
              uri={"./images/poster.jpeg"}
              render={(src, style) => <img src={src} style={style} />}
            />
          </div>
          <div className={eventStyles.header}>
            <h1>IT Quiz</h1>
            <Button>Register</Button>
          </div>

          <div className={eventStyles.event_caption}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quod reprehenderit recusandae ipsum cupiditate, unde officiis
              consequuntur commodi deserunt provident, eos voluptates quibusdam
              quos molestiae quo, dolor deleniti omnis sequi? Nam, beatae.
              Corporis expedita omnis architecto dolores sed repudiandae.
              Praesentium asperiores officia possimus aspernatur incidunt
              commodi sequi mollitia similique aliquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ratione temporibus voluptatibus facilis assumenda error corporis
              cumque eos vero iusto?
            </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quod reprehenderit recusandae ipsum cupiditate, unde officiis
              consequuntur commodi deserunt provident, eos voluptates quibusdam
              quos molestiae quo, dolor deleniti omnis sequi? Nam, beatae.
              Corporis expedita omnis architecto dolores sed repudiandae.
              Praesentium asperiores officia possimus aspernatur incidunt
              commodi sequi mollitia similique aliquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ratione temporibus voluptatibus facilis assumenda error corporis
              cumque eos vero iusto?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quod reprehenderit recusandae ipsum cupiditate, unde officiis
              consequuntur commodi deserunt provident, eos voluptates quibusdam
              quos molestiae quo, dolor deleniti omnis sequi? Nam, beatae.
              Corporis expedita omnis architecto dolores sed repudiandae.
              Praesentium asperiores officia possimus aspernatur incidunt
              commodi sequi mollitia similique aliquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ratione temporibus voluptatibus facilis assumenda error corporis
              cumque eos vero iusto?
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Events;
