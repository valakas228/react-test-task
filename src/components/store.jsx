import React from "react";
import Products from "../containers/products";
import ProductsList from "../containers/ProductsList";

const Store = () => {
  return (
    <>
      <div className="content-main-block-background">
        <Products />
      </div>
      <ProductsList />
    </>
  );
};

export default Store;
