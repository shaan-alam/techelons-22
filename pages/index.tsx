import { Events, Hero, Techelons } from "../containers";
import sanityClient from "../sanityClient";
import { GetStaticProps } from "next";
import { Props } from "../containers/Events/types";
import withLayout from "../HOC/withLayout";

const Home = ({ events }: Props) => {
  return (
    <>
      <Hero />
      <Techelons />
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

  return {
    props: {
      events,
    },
  };
};
