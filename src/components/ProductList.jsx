import React from "react";
import "./css/productList.css";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const counter = (value) => {
    let arr = [];
    if (value == true) {
      arr.push(1);
    } else {
      arr.push(-1);
    }
    props.getCount(arr);
  };
  return (
    <div>
      <div className="products">
        {props.data.map((item) => (
          <ProductItem
            src={item.src}
            title={item.title}
            price={item.price}
            count={counter}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
