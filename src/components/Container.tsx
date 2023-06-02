import cn from "@utils/cn";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {};

const Container = ({ children, className }: Props) => {
  return <div className={cn("px-[3%]", className)}>{children}</div>;
};

export default Container;
