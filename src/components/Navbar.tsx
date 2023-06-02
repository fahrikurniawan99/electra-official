import React from "react";
import Brand from "./Brand";
import Container from "./Container";
import { AiOutlineSetting } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Container className="h-20 flex items-center shadow justify-between">
      <Brand asLink>Electra</Brand>
      <button className="w-12 aspect-square bg-gray-700 rounded-md flex justify-center items-center text-white text-2xl">
        <AiOutlineSetting />
      </button>
    </Container>
  );
};

export default Navbar;
