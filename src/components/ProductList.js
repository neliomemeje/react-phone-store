import React from "react";
import { ProductConsumer } from "../context";
import Product from "./Product";

function ProductList() {
  return (
    <div className="container my-5 text-center">
      <div className="row">
        <h1 className="text-title text-blue py-2">Our Products</h1>
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              return <Product key={product.id} {...product} />;
            });
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}

export default ProductList;
