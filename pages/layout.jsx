import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      {children}
      <Footer />
      <Footer bottomFooter />
    </>
  );
};

export default Layout;
