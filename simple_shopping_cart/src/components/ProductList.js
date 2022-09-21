import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQunatity={props.decrementQunatity}
          removeIteam={props.removeIteam}
        />
      );
    })
  ) : (
    <h1>Empty Cart</h1>
  );
}
