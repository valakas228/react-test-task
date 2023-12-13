import React from "react";

const List = (data) => {
  console.log(data);
  return (
    <>
      <div className="products">
        <div className="product-grid">
          {data.products.map((item) => (
            <div className="product" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"></p>
              </div>
              <div className="card-price">
                <a className="button-shop">{item.price}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
