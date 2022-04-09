import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { pageTransition } from "../../animations";
import { Button, Navbar } from "../../components";
import eventStyles from "../../styles/Events.module.scss";
import LazyImage from "react-lazy-blur-image";
import sanityClient from "../../sanityClient";
import { Event } from "../../containers/Events/types";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "../../components/Layout";

interface Props {
  event: Event;
}

const Event = ({ event }: Props) => {
  return (
    <>
      <Layout title={`${event.name} - Techelons'22`} />
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
              placeholder={event.poster}
              uri={event.poster}
              render={(src, style) => <img src={src} style={style} />}
            />
          </div>

          <div className={eventStyles.event_caption}>
            <div className={eventStyles.header}>
              <h1>{event.name}</h1>
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <Button>Register</Button>
              </a>
            </div>
            <BlockContent
              blocks={event.caption}
              projectId="axxb6ocs"
              dataset="production"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Event;

export const getStaticProps: GetStaticProps = async (context) => {
  const events =
    await sanityClient.fetch(`*[_type == "event" && slug.current == "${context.params.slug}"] {
    name,
    caption,
    "poster": poster.asset->url
  }`);

  return {
    props: {
      event: events[0],
    },
  };
};

export const getStaticPaths = async () => {
  const events = (await sanityClient.fetch(`*[_type == "event"] {
    name,
    caption,
    "poster": poster.asset->url,
    "slug": slug.current
  }`)) as Array<Event>;

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
