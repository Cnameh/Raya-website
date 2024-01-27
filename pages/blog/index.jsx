import Head from "next/head";
import Layout from "../layout";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>بلاگ</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
      <main>بلاگ</main>
      </Layout>
    </>
  );
};

export default BlogPage;
