import React from "react";
import { useState } from "react";
import "./css/productItem.css";

const ProductItem = (props) => {
  const [addState, setAddState] = useState("add");
  const [removeState, setRemoveState] = useState("remove-disable");
  const rating = [];
  const add = () => {
    if (removeState === "remove-disable") {
      setRemoveState("remove");
      setAddState("add-disable");
      props.count(true);
      alert(`${props.title} added to cart`);
      window.scrollTo(0, 0);
    }
  };

  const remove = () => {
    if (addState === "add-disable") {
      setAddState("add");
      setRemoveState("remove-disable");
      props.count(false);
      alert(`${props.title} removed from Cart`);
      window.scrollTo(0, 0);
    }
  };

  for (let i = 0; i < props.rating; i++) {
    rating.push("⭐");
  }
  return (
    <div className="product">
      <img src={props.src} height="100px" alt="Products"></img>
      <div className="title">{props.title} </div>
      <div className="price">Rs {props.price}</div>
      <div className="rating">{rating}</div>
      <button className={addState} onClick={add}>
        Add to Cart
      </button>
      <button className={removeState} onClick={remove}>
        Remove from Cart
      </button>
    </div>
  );
};

export default ProductItem;
