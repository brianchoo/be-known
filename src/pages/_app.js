import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Home App</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
