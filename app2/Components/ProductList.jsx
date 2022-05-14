import { useState } from "react";
import itemsData from "../../src/data/items-data";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState("all");
  const productList = itemsData.map((item) => (
    <Product key={item.id} item={item} />
  ));

  return <div>{productList}</div>;
};
export default ProductList;
