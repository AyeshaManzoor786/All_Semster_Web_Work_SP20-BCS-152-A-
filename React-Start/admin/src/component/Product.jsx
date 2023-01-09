import React from "react";
import "./product.css";
const Product = (props) => {
  console.log(props);
  var title = props.title;
  var priceClass = props.price <= 30000 ? "orange" : "green";

  return (
    <div>
      <h1 style={{ backgroundColor: "aqua" }}>Product {title}</h1>
      count={props.count}
      <p>Product detail</p>
      <div className={priceClass}>
        <b>Price:</b>
        {props.price}
        <button
          onClick={() => {
            props.onAddToCart(props.title); //lifting the state up
          }}
        >
          Add to cart
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Product;
