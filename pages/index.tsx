import { motion } from "framer-motion";
import { pageTransition } from "../animations";
import { Events, Hero } from "../containers";
import { Navbar, ParallaxImages } from "../components";
import sanityClient from "../sanityClient";
import { GetStaticProps } from "next";
import { Props } from "../containers/Events/types";
import Layout from "../components/Layout";

const Home = ({ events }: Props) => {
  return (
    <>
      <Navbar />
      <Layout title="Home - Techelons'22" />
      <motion.section
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ParallaxImages />
        <Hero />
        <Events events={events} />
      </motion.section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const events = await sanityClient.fetch(`*[_type == "event"] {
    name,
    caption,
    "poster": poster.asset->url,
    "slug": slug.current
  }`);

  return {
    props: {
      events,
    },
  };
};
