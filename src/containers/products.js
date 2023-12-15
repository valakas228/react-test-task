import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../actions/add";
import axios from "axios";

const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );

    const newData = response.data.map((post) => ({
      id: post.id,
      title: post.title,
      price: `${post.title.length}/мес`,
    }));

    newData.forEach((product) => {
      dispatch(addProducts(product.id, product.title, product.price));
    });
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
