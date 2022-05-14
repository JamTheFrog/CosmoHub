import React, { useState } from "react";
import ProductList from "./Components/ProductList";
import itemsData from "../src/data/items-data";

const App = () => {
  const [page, setPage] = useState("products");

  let pageOutput = <ProductList />;
  if (page === "products") {
    pageOutput = <ProductList />;
  }
  if (page === "add-product") {
    pageOutput = <h1>Add Product Form</h1>;
  }
  if (page === "zero-to-hundread"){
  }
  if (page === "hundred-to-higher"){
      
  }

  const setProductsPageHandler = () => {
    setPage("products");
  };

  const setAddProductPageHandler = () => {setPage("add-product");};

  const ZeroToHundredPageHandler = () => {setPage("zero-to-hundread");}

  const HundredToHigherPageHandler = () => {setPage("hundred-to-higher");}
  
  return (
    <>
      <header>
        <button onClick={setProductsPageHandler}>Products</button>
        <button onClick={setAddProductPageHandler}>Add Product</button>
      </header>
      {pageOutput}
    </>
  );
};
export default App;
