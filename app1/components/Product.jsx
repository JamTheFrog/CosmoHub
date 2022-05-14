import React from "react";

function Product(props) {
  return (
    <li>
      <h1>{props.product.title}</h1>
    </li>
  );
}

export default Product;
