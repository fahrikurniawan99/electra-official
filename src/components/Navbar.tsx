import React from "react";
import Brand from "./Brand";
import Container from "./Container";
import {
  LuMenu,
  LuShoppingCart,
  LuHelpCircle,
  LuUser,
  LuUserPlus,
  LuHome,
} from "react-icons/lu";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className="h-20 flex items-center shadow justify-between sticky top-0 z-[999] bg-white">
      <Brand asLink>Electra</Brand>
      <button
        onClick={toggler}
        className="w-12 aspect-square bg-gray-700 rounded-md flex justify-center items-center text-white text-2xl"
      >
        <LuMenu />
      </button>
      {isOpen && (
        <ul className="w-full px-5 pb-5 pt-3 bg-white shadow absolute top-full left-0 space-y-3">
          <li>
            <Link
              href={"/"}
              className="inline-flex items-center gap-3 py-1 w-full font-medium"
            >
              <LuHome className="text-xl" /> Home
            </Link>
          </li>
          <li>
            <Link
              href={"/shop"}
              className="inline-flex items-center gap-3 py-1 w-full font-medium"
            >
              <LuShoppingCart className="text-xl" /> Toko - electra shop
            </Link>
          </li>
          <li>
            <button className="inline-flex items-center gap-3 py-1 w-full font-medium">
              <LuHelpCircle className="text-xl" /> Tentang kami
            </button>
          </li>
          <li>
            <button className="inline-flex items-center gap-3 py-1 w-full font-medium">
              <LuUser className="text-xl" /> Masuk
            </button>
          </li>
          <li>
            <button className="inline-flex items-center gap-3 py-1 w-full font-medium">
              <LuUserPlus className="text-xl" /> Buat akun
            </button>
          </li>
        </ul>
      )}
    </Container>
  );
};

export default Navbar;
