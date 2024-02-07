import Head from "next/head";
import Layout from "../layout";

const SingleBlogPage = () => {
  return (
    <>
      <Head>
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main>SingleBlogPage</main>
      </Layout>
    </>
  );
};

export default SingleBlogPage;