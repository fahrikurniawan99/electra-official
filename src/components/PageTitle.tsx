import React from "react";
import Container from "@components/Container";

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <Container className="bg-red-500 w-full flex flex-col justify-center items-center py-8">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </Container>
  );
};

export default PageTitle;
