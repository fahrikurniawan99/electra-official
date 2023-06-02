import Container from "@/components/Container";
import cn from "@/utils/cn";
import * as React from "react";
import { LuXCircle, LuArrowDownNarrowWide } from "react-icons/lu";

type Props = {};

export type ProductColors = "red" | "white" | "black";

const Filter = (props: Props) => {
  const [color, setColor] = React.useState<ProductColors | string>("");
  const [open, setOpen] = React.useState(false);
  const onChange = (value: ProductColors | string) => {
    setColor(value);
  };
  const toggle = () => setOpen(!open);
  return (
    <>
      <Container className="flex justify-end my-3">
        <button
          onClick={toggle}
          className="h-12 aspect-square flex rounded-md justify-center items-center border text-2xl text-gray-500"
        >
          {open ? <LuXCircle /> : <LuArrowDownNarrowWide />}
        </button>
      </Container>
      {open && (
        <>
          <Container className="mt-3">
            <h3 className="text-gray-500">Warna</h3>
          </Container>
          <Container className="flex items-center justify-between h-12">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => onChange("red")}
                className="h-7 aspect-square rounded-full bg-red-500 flex"
              >
                <div
                  className={cn(
                    "m-auto w-3 aspect-square rounded-3xl bg-white",
                    color !== "red" && "hidden"
                  )}
                ></div>
              </button>
              <button
                onClick={() => onChange("white")}
                className="h-7 aspect-square rounded-full bg-white flex border border-gray-400"
              >
                <div
                  className={cn(
                    "m-auto w-3 aspect-square rounded-3xl bg-gray-900",
                    color !== "white" && "hidden"
                  )}
                ></div>
              </button>
              <button
                onClick={() => onChange("black")}
                className="h-7 aspect-square rounded-full bg-gray-900 flex"
              >
                <div
                  className={cn(
                    "m-auto w-3 aspect-square rounded-3xl bg-white",
                    color !== "black" && "hidden"
                  )}
                ></div>
              </button>
            </div>
            {color.length > 1 && (
              <button
                onClick={() => onChange("")}
                className="text-red-600 font-semibold"
              >
                <LuXCircle className="m-auto text-[25px]" />
                <span className="text-xs">hapus</span>
              </button>
            )}
          </Container>
          <Container className="mt-3">
            <h3 className="text-gray-500">Jangkauan Harga</h3>
          </Container>
          <Container className="flex flex-col gap-3 mt-2">
            <input
              type="number"
              value={20000}
              className="border h-10 rounded w-full px-3 text-sm outline-none"
              placeholder="Harga terendah"
            />
            <p className="text-sm">Sampai</p>
            <input
              type="number"
              value={10000000}
              className="border h-10 rounded w-full px-3 text-sm outline-none"
              placeholder="Harga tinggi"
            />
          </Container>
        </>
      )}
    </>
  );
};

export default Filter;
