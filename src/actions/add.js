export const addProducts = (id, title, price) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "ADD_PRODUCTS",
        id,
        title,
        price,
      });
    }, 1000);
  };
};
