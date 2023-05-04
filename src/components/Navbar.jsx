import React from "react";
import "./css/navBar.css";
const Navbar = (props) => {
  return (
    <div>
      <nav>
        <h2>Cloth Shop</h2>
        <div className="cart">
          <img src="shopping-cart.png" height="50px" width="50px" alt="cart" />
          <p className="count">{props.count}</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
