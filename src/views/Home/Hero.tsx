import Container from "@components/Container";
import React from "react";
// import { BiHeadphone } from "react-icons/bi";
// import { BsKeyboard, BsMouse } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container className="py-10">
      {/* <BiHeadphone className="absolute text-4xl right-24 rotate-12 text-red-300" />
      <BsKeyboard className="absolute text-4xl right-10 top-20 text-blue-300" />
      <BsMouse className="absolute text-4xl right-11 -rotate-5 top-8 text-gray-300" /> */}
      <h1 className="font-bold text-red-500 text-2xl">kami</h1>
      <p className="font-bold text-3xl tracking-tight">
        membantu anda menemukan pilihan
        <span className="text-red-500"> terbaik.</span>
      </p>
    </Container>
  );
};

export default Hero;
