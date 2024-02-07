import Head from "next/head";
import Layout from "../layout";

const PortofolioPage = () => {
  return (
    <>
      <Head>
        <title>نمونه کار</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main>نمونه کار</main>
      </Layout>
    </>
  );
};

export default PortofolioPage;
