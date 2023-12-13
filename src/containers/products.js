import React from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../actions/add";

const Products = () => {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    let data = event.target.elements;
    dispatch(addProducts(data.id.value, data.title.value, data.price.value));
  };
  return (
    <form onSubmit={formHandler}>
      <input type="text" name="id" defaultValue="Название" />

      <input type="text" name="title" defaultValue="Описание" />

      <input type="text" name="price" defaultValue="Цена" />

      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default Products;
