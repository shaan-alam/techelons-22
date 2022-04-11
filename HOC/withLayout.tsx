import { Navbar, Layout, ParallaxImages } from "../components";
import Footer from "../components/Footer";

const withLayout = (Page: React.FC<any>, title: string): React.FC => {
  return function PageWithNavbar(props) {
    return (
      <>
        <Navbar />
        <ParallaxImages />
        <Layout title={title} />
        <Page {...props} />
        <Footer />
      </>
    );
  };
};

export default withLayout;
