import React from "react";
import ProductsData from "../data/data-information";
import Product from "./Product";

const displayProducts = () => {
  const productListItemElements = ProductsData.map((product) => (
    <Product product={product} />
  ));

  return (
    <ul>
      {productListItemElements}
    </ul>
  );
};
export default displayProducts;
