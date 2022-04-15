import { GetStaticProps } from "next";
import { Button } from "../../components";
import eventStyles from "../../styles/Events.module.scss";
import LazyImage from "react-lazy-blur-image";
import sanityClient from "../../sanityClient";
import { Event } from "../../containers/Events/types";
import BlockContent from "@sanity/block-content-to-react";
import withLayout from "../../HOC/withLayout";

interface Props {
  event: Event;
}

const Event = ({ event }: Props) => {
  return (
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
          <a href={event.registrationLink} target="_blank" rel="noreferrer">
            <Button>Register</Button>
          </a>
        </div>
        <BlockContent
          blocks={event.caption}
          projectId="axxb6ocs"
          dataset="production"
        />
        {event?.qr_code && <div className={eventStyles.qr_code}>
          <h1>Scan for Registration</h1>
          <img src={event.qr_code} alt="QR Code" />
        </div>}
      </div>
    </div>
  );
};

export default withLayout(Event);

export const getStaticProps: GetStaticProps = async (context) => {
  const events =
    await sanityClient.fetch(`*[_type == "event" && slug.current == "${context.params.slug}"] {
    name,
    caption,
    "poster": poster.asset->url,
    registrationLink,
    "qr_code": qr_code.asset->url,
    slug
  }`);

  return {
    props: {
      event: events[0],
    },
  };
};

export const getStaticPaths = async () => {
  const events = (await sanityClient.fetch(`*[_type == "event"] {
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
