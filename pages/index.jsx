import Head from "next/head";
import HeaderSlider from "../components/HeaderSlider";

const HomePage = () => {

  return (
    <>
      <Head>
        <title>رایا</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderSlider />
      <main>خانه</main>
    </>
  );
}

export default HomePage;
