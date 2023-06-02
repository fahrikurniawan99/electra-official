import * as React from "react";
import CategoryTab from "./CategoryTab";
import Filter from "./Filter";
import Card from "./Card";
import Container from "@components/Container";
type Props = {};

const Products = (props: Props) => {
  return (
    <>
      <CategoryTab />
      <Filter />
      <Container className="grid grid-cols-2 gap-2 mt-5">
        {Array.from({ length: 8 }).map((_, index) => {
          return <Card key={index} />;
        })}
      </Container>
    </>
  );
};

export default Products;
