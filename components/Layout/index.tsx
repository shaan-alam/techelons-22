import Head from "next/head";

interface Props {
  title: string;
}

const Layout = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Techelons'22 - The annual Technical Fest of Shivaji College" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Layout;
