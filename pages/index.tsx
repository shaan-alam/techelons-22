import { Events, Hero, Techelons } from "../containers";
import { Event } from "../containers/Events/types";
import sanityClient from "../sanityClient";
import { GetStaticProps } from "next";
import withLayout from "../HOC/withLayout";

interface About {
  name: string;
  about: Record<any, any>;
}

export interface Props {
  about: About;
  events: Event[];
}

const Home = ({ about, events }: Props) => {
  return (
    <>
      <Hero />
      <Techelons about={about} />
      <Events events={events} />
    </>
  );
};

export default withLayout(Home, "Home - Techelons'22");

export const getStaticProps: GetStaticProps = async () => {
  const events = await sanityClient.fetch(`*[_type == "event"] {
    name,
    caption,
    "poster": poster.asset->url,
    "slug": slug.current,
    tagLine,
    registrationLink
  }`);

  const about =
    await sanityClient.fetch(`* [_type == "about" && name == "Techelons"] {
    name, about
    }`);

  return {
    props: {
      events,
      about: about[0],
    },
  };
};
