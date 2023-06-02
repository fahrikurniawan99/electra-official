import Container from "@components/Container";
import React from "react";
import { RiHeadphoneLine, RiKeyboardLine, RiMouseLine } from "react-icons/ri";

type Props = {};

const Provider = (props: Props) => {
  return (
    <Container className="bg-red-500 py-8">
      <h1 className="text-center font-semibold text-2xl text-white mb-5">
        Produk kami
      </h1>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded shadow flex flex-col p-5 items-center">
          <div className="flex h-16 aspect-square bg-red-500 rounded-full">
            <RiHeadphoneLine className="text-3xl m-auto text-white" />
          </div>
          <h3 className="font-bold mt-3 tracking-tight">Headphone</h3>
          <button className="bg-red-500 text-white text-sm px-4 font-medium rounded mt-2 py-1 text-center">
            lihat
          </button>
        </div>
        <div className="bg-white rounded shadow flex flex-col p-5 items-center">
          <div className="flex h-16 aspect-square bg-red-500 rounded-full">
            <RiKeyboardLine className="text-3xl m-auto text-white" />
          </div>
          <h3 className="font-bold mt-3 tracking-tight">Keyboard</h3>
          <button className="bg-red-500 text-white text-sm px-4 font-medium rounded mt-2 py-1 text-center">
            lihat
          </button>
        </div>
        <div className="bg-white rounded shadow flex flex-col p-5 items-center">
          <div className="flex h-16 aspect-square bg-red-500 rounded-full">
            <RiMouseLine className="text-3xl m-auto text-white" />
          </div>
          <h3 className="font-bold mt-3 tracking-tight">Mouse</h3>
          <button className="bg-red-500 text-white text-sm px-4 font-medium rounded mt-2 py-1 text-center">
            lihat
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Provider;
