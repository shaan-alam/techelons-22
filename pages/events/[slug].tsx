import { GetStaticProps } from "next";
import { Button } from "../../components";
import eventStyles from "../../styles/Events.module.scss";
import LazyImage from "react-lazy-blur-image";
import sanityClient from "../../sanityClient";
import { Event } from "../../containers/Events/types";
import BlockContent from "@sanity/block-content-to-react";
import withLayout from "../../HOC/withLayout";
import Moment from "react-moment";
import { PersonPlusFill } from "react-bootstrap-icons";

interface Props {
  event: Event;
}

const SSR = typeof window === undefined;

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
          <div className="flex flex-col w-full">
            <h1>{event.name}</h1>
            {new Date() < new Date(event.deadline) && !SSR ? (
              <p>
                Deadline in&nbsp;
                <Moment duration={new Date()} date={event.deadline} />
              </p>
            ) : (
              <p>Registrations Closed! 😢</p>
            )}
          </div>
          {new Date() < new Date(event.deadline) && (
            <a href={event.registrationLink} target="_blank" rel="noreferrer">
              <Button className="flex items-center justify-between">
                <PersonPlusFill className="mr-1 h-4 w-4" />
                &nbsp;Register
              </Button>
            </a>
          )}
        </div>

        <BlockContent
          blocks={event.caption}
          projectId="axxb6ocs"
          dataset="production"
        />
        {event?.qr_code && new Date() < new Date(event.deadline) && (
          <div className={eventStyles.qr_code}>
            <h1>Scan for Registration</h1>
            <img src={event.qr_code} alt="QR Code" />
          </div>
        )}
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
    slug,
    deadline
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
