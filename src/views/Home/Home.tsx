import Navbar from "@components/Navbar";
import Head from "next/head";
import Hero from "./Hero";
import Provider from "./Provider";
import WhereGetProduct from "./WhereGetProduct";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Electra</title>
        <meta name="description" content="Best Headphone electra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Provider />
        <WhereGetProduct />
        <Footer />
      </main>
    </>
  );
}
