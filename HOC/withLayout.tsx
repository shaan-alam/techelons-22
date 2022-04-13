import { Navbar, Layout, ParallaxImages } from "../components";
import Footer from "../components/Footer";

const withLayout = (Page: React.FC<any>, title?: string) => {
  return function PageWithNavbar(props) {
    return (
      <>
        <Navbar />
        {/* <ParallaxImages /> */}
        <Layout title={title || `${props.event.name} - Techelons'22`} />
        <Page {...props} />
        <Footer />
      </>
    );
  };
};

export default withLayout;
