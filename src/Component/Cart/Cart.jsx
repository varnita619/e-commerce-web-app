import React, { useState } from "react";
import "./Cart.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useAllContext } from "../../context/context";

export const Cart = ({ product }) => {
  const { name, desc, imageURL, price } = product;
  const { dispatch } = useAllContext();
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(JSON.parse(count + 1));
  };

  const handleDecrease = () => {
    count !== 0 && setCount(JSON.parse(count - 1));
  };
  return (
    <div className="cart-product-container">
      <div className="cart-sub-container">
        <span
          class="dismiss-icon"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: product })
          }
        >
          <CancelOutlinedIcon />
        </span>
        <div>
          <img src={imageURL} alt="shoe" className="cart-product-img" />
        </div>
        <div className="cart-info">
          <p className="product-name">{name}</p>
          <p className="product-desc">{desc}</p>
          <p className="product-price">Rs.{price}/-</p>
        </div>
       
      </div>
      <div className="cart-btns">
          <button onClick={handleIncrease}>+</button>
          <span>{count}</span> <button onClick={handleDecrease}>-</button>
        </div>
    </div>
  );
};
