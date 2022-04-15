import { GetStaticProps } from "next";
import sanityClient from "../sanityClient";
import { Message, About, Team } from "../containers";
import { Teacher } from "../containers/Teachers/types";
import withLayout from "../HOC/withLayout";

interface AboutWebster {
  name: string;
  about: Record<any, any>;
}

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
  teachers: Teacher[];
  about: AboutWebster;
}

const AboutUs = ({
  president,
  vicePresidents,
  officeBearers,
  coreMembers,
  teachers,
  about,
}: Props) => {
  let temp = coreMembers[0];
  coreMembers[0] = coreMembers[5];
  coreMembers[5] = temp;

  return (
    <>
      <About about={about} />
      <Message teachers={teachers} />
      <Team team={{ president, vicePresidents, officeBearers, coreMembers }} />
    </>
  );
};

export default withLayout(AboutUs, "About Us - Techelons'22");

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

  const teachers = await sanityClient.fetch(`*[_type == 'teacher'] {
    name,
    message,
    "profileImage": profileImage.asset->url
  }`);

  const about = await sanityClient.fetch(`*[_type == 'about'] {
    name, about
  }`);

  return {
    props: {
      president: president[0],
      vicePresidents,
      officeBearers,
      coreMembers,
      teachers,
      about: about[0],
    },
  };
};
