import Head from "next/head";

interface Props {
  /* Title of the page */
  title: string;
}

/**
 * @name - Layout
 * @description - This component is used to display the title and other meta tags on different pages
 * @param - An oject of type {@link Props}
 *  */

const Layout = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Techelons'22 - The annual Technical Fest of Shivaji College"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Layout;
