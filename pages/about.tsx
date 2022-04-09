import { Navbar, ParallaxImages, ProfileCard } from "../components";
import aboutStyles from "../styles/About.module.scss";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";
import { GetStaticProps } from "next";
import sanityClient from "../sanityClient";
import { Message } from "../containers";
import Layout from "../components/Layout";

interface Member {
  name: string;
  designation: string;
  profileImage: string;
}

interface Props {
  president: Member;
  vicePresidents: Member[];
  officeBearers: Member[];
  coreMembers: Member[];
}

const About = ({
  president,
  vicePresidents,
  officeBearers,
  coreMembers,
}: Props) => {
  let temp = coreMembers[0];
  coreMembers[0] = coreMembers[5];
  coreMembers[5] = temp;

  return (
    <>
      <Navbar />
      <Layout title="About Us - Techelons'22" />
      <ParallaxImages />
      <motion.section
        className={aboutStyles.container}
        variants={pageTransition}
        initial="hidden"
        animate="visible"
      >
        <h1>About Us</h1>
        <div className="block md:grid grid-cols-2 gap-8 mb-20">
          <div className="websters flex justify-center relative overflow-hidden">
            <img
              src="./images/websters_logo.png"
              alt="Websters"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="intro text-white text-center md:text-left font-josefin mt-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur itaque numquam nobis expedita dignissimos tenetur
              provident reiciendis illum autem, minus ipsum consequuntur, amet
              error et omnis iste dolores culpa facere.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              maiores recusandae aperiam vel autem repellat assumenda ipsam
              quibusdam ab quos, consequatur nam aut corrupti est, eius enim
              laudantium inventore dolorem.
            </p>
          </div>
        </div>
      </motion.section>
      <Message />
      <section className={aboutStyles.meet_team}>
        <h1 className="text-white font-montserrat text-3xl text-center uppercase font-bold mb-8">
          Meet Our Team <span role="emoji">♥</span>
        </h1>
        <div className={aboutStyles.president}>
          <ProfileCard
            name={president.name}
            designation={president.designation}
            imageURL={president.profileImage}
          />
        </div>
        <div className={aboutStyles.vice_presidents}>
          {vicePresidents.map((vicePresident) => (
            <ProfileCard
              key={vicePresident.name}
              name={vicePresident.name}
              designation={vicePresident.designation}
              imageURL={vicePresident.profileImage}
            />
          ))}
        </div>
        <div className={aboutStyles.office_bearers}>
          {officeBearers.map((officeBearer) => (
            <ProfileCard
              key={officeBearer.name}
              name={officeBearer.name}
              designation={officeBearer.designation}
              imageURL={officeBearer.profileImage}
            />
          ))}
        </div>
        <div className={aboutStyles.core_members}>
          {coreMembers.map((coreMember) => (
            <ProfileCard
              key={coreMember.name}
              name={coreMember.name}
              designation={coreMember.designation}
              imageURL={coreMember.profileImage}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const president = await sanityClient.fetch(`*[_type == 'president'] {
    name,
    designation,
    "profileImage": profileImage.asset->url
  }`);

  const vicePresidents = await sanityClient.fetch(`*[_type == 'vicePresident'] {
    name,
    designation,
    "profileImage": profileImage.asset->url
  }`);

  const officeBearers = await sanityClient.fetch(`*[_type == 'officeBearer'] {
    name,
    designation,
    "profileImage": profileImage.asset->url
  }`);

  const coreMembers = await sanityClient.fetch(`*[_type == 'coreMember'] {
    name,
    designation,
    "profileImage": profileImage.asset->url
  }`);

  return {
    props: {
      president: president[0],
      vicePresidents,
      officeBearers,
      coreMembers,
    },
  };
};
