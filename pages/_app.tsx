import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Raleway } from "@next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const inter = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Head>
        <title>Yoganandan</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </main>
  );
}
