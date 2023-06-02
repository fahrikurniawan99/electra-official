import * as React from "react";
import Link from "next/link";
import cn from "@utils/cn";

type Props = {
  asLink?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const Brand = ({ asLink = false, href = "/", className, children }: Props) => {
  const Component = asLink ? Link : "button";
  return (
    <Component
      href={href}
      className={cn("font-bold text-3xl tracking-tight", className)}
    >
      {children}
    </Component>
  );
};

export default Brand;
