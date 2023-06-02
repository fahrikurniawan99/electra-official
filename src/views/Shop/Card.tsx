import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="border rounded-md p-2">
      <div className="bg-gray-300 rounded-md w-full aspect-square"></div>
      <h1 className="text-xl font-bold mt-2">Electra A1</h1>
      <h2>Rp. 500.00</h2>
      <button className="w-full bg-gray-800 py-3 text-center rounded-md text-white font-medium text-xs mt-3">
        Lihat
      </button>
    </div>
  );
};

export default Card;
