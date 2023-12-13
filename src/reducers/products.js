const products = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          price: action.price,
        },
      ];
    default:
      return state;
  }
};

export default products;
