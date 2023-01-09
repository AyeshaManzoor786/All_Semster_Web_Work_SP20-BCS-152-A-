import React from "react";
// import { useState } from "react";
import Counter from "./component/Counter";
import Product from "./component/Product";
import "./index.css";

function App() {
  const handAddToCart = (title) => {
    console.log("You click the button");
    alert("Add To Cart is Clicked for  " + title);
  };
  const [count, setCount] = React.useState(5);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Hello React Components</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Product
        title="Audi"
        price="80000"
        onAddToCart={handAddToCart}
        count={count}
      />
      <Product
        title="Civic"
        price="20000"
        onAddToCart={handAddToCart}
        count={count}
      />
      <Product
        title="Sazuki"
        price="50000"
        onAddToCart={handAddToCart}
        count={count}
      />
    </div>
  );
}

export default App;
