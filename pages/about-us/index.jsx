import Head from "next/head";
import Layout from "../layout";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>درباره ما</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <main>درباره ما</main>
      </Layout>
    </>
  );
};

export default AboutUsPage;
