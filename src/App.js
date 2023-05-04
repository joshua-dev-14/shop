import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import productData from "./data";
import { useState } from "react";
import './app.css'

let counter = 0;

function App() {
  const [count, setCount] = useState(counter);
  let result = [];

  let getCount = (arr) => {
    result = result.concat(arr);
    counter = result.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    setCount((prevCount) => counter + prevCount);
  }

  return (
    <div className="app">
      <Navbar count={count} />
      <ProductList data={productData} getCount={getCount} />

    </div>
  )
}

export default App;
