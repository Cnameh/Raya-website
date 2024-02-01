import Head from "next/head";
import HeaderSlider from "../components/HeaderSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>رایا</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Navbar />
        <HeaderSlider />
      </header>
      <main></main>
      <Footer />
      <Footer bottomFooter />
    </>
  );
};

export default HomePage;
