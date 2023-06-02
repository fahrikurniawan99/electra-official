import React from "react";
import { RxSlash } from "react-icons/rx";
import Link from "next/link";
import Container from "./Container";

type Item = {
  label: string;
  href: string;
};

type Props = {
  activeLabel: string;
  items?: Item[];
};

const Breadcrumb = ({ activeLabel, items }: Props) => {
  return (
    <Container>
      <ul className="flex py-4 gap-1 items-center font-medium">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <RxSlash />
        {items &&
          items?.map(({ href, label }) => {
            return (
              <>
                <li>
                  <Link href={href}>{label}</Link>
                </li>
                <RxSlash />
              </>
            );
          })}
        <li className="text-gray-400">{activeLabel}</li>
      </ul>
    </Container>
  );
};

export default Breadcrumb;
