import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ eachProduct }) => {
  const { name, price, imageURL } = eachProduct;
  const navigate = useNavigate();
  console.log(eachProduct)

  const singleProductHandler = () => {
    navigate(`/product/${eachProduct._id}`);
  };

  return (
    <div className="card">
      <div className="product-image" onClick={singleProductHandler}>
        <img src={imageURL} alt="card" className="product-img" />
      </div>

      <div className="card-details">
        <h3>{name}</h3>
      </div>
      <div className="card-pricing">
        <div className="price">
          <p>Rs {price}/-</p>
        </div>
        <div className="rating">
          <label className="check rated">
            <input type="checkbox" id="r1" className="input-checkbox" />
          </label>
          <label className="check rated">
            <input type="checkbox" id="r2" className="input-checkbox" />
          </label>
          <label className="check">
            <input type="checkbox" id="r3" className="input-checkbox" />
          </label>
          <label className="check">
            <input type="checkbox" id="r4" className="input-checkbox" />
          </label>
          <label className="check">
            <input type="checkbox" id="r5" className="input-checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
};
