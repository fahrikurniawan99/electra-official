import PageTitle from "@components/PageTitle";
import Breadcrumb from "@components/Breadcrumb";
import Navbar from "@components/Navbar";
import Head from "next/head";
import * as React from "react";
import Products from "./Products";

type Props = {};

const Shop = (props: Props) => {
  return (
    <>
      <Head>
        <title>Electra Shop</title>
        <meta name="description" content="Belanja di electra shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Breadcrumb activeLabel="Shop" />
        <PageTitle title="Electra Shop" />
        <Products />
      </main>
    </>
  );
};

export default Shop;
