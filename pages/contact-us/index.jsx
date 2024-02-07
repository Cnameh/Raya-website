import Head from "next/head";
import Layout from "../layout";

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>تماس با ما</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main>تماس با ما</main>
      </Layout>
    </>
  );
};

export default ContactUsPage;
