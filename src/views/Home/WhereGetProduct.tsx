import Container from "@components/Container";
import React from "react";
import { SiShopee, SiAmazon, SiBukalapak } from "react-icons/si";
import { AiFillShopping } from "react-icons/ai";

type Props = {};

const WhereGetProduct = (props: Props) => {
  return (
    <Container className="py-10">
      <h1 className="font-bold text-2xl">Dapatkan produk</h1>
      <p className="text-gray-500">
        melalui platform di bawah anda bisa mendapatkan produk kami.
      </p>
      <div className="grid grid-cols-3 mt-5 gap-3">
        <div className="rounded-lg border w-full aspect-square flex-col flex justify-center items-center">
          <SiShopee className="text-5xl mx-auto text-gray-700" />
          <p className="mt-2 text-gray-500 font-medium">Shopee</p>
        </div>
        <div className="rounded-lg border w-full aspect-square flex-col flex justify-center items-center">
          <SiAmazon className="text-5xl mx-auto text-gray-700" />
          <p className="mt-2 text-gray-500 font-medium">Amazon</p>
        </div>
        <div className="rounded-lg border w-full aspect-square flex-col flex justify-center items-center">
          <SiBukalapak className="text-5xl mx-auto text-gray-700" />
          <p className="mt-2 text-gray-500 font-medium">Bukalapak</p>
        </div>
        <button className="rounded-lg w-full h-20 col-span-3 bg-gray-800 mt-2 text-white inline-flex items-center justify-center text-lg font-medium">
          Electra Shop <AiFillShopping className="ml-2 text-2xl" />
        </button>
      </div>
    </Container>
  );
};

export default WhereGetProduct;
