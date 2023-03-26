import React from "react";
import "./Product.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Cart, SingleProductCard } from "./../../Component";
import { useAllContext } from "../../context/context";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const {
    state: { cart },
  } = useAllContext();
  const navigate = useNavigate();

  return (
    <div className="single-prd-container">
      <div className="single-prod">
        <div className="head">
          <span className="prod-heading">
            <ArrowBackIosIcon
              className="arrow-icon"
              onClick={() => navigate("/")}
            />
            your design space
          </span>
          <SingleProductCard />
        </div>
      </div>

      <div className="cart-prod-container">
        <div className="products-header">
          <h3 className="products-heading">Cart</h3>

          <div className="action-btn">
            <LocalMallOutlinedIcon />
          </div>
        </div>
        <div className="cart-products-container">
          {cart.length !== 0 ? (
            <>
              {cart.map((product, i) => {
                return <Cart key={i} product={product} />;
              })}
            </>
          ) : (
            <div className="cart-msg">
              <p>What&apos;s stopping you, designer?</p>
            </div>
          )}

          <div className="cart-extra-info">
            {cart.length === 0 ? (
              <>
                <div className="home">
                  <span className="text">
                    <PlaceOutlinedIcon className="icon" /> Home
                  </span>
                </div>

                <div className="date">
                  <span className="text">
                    <CalendarTodayOutlinedIcon /> Select date
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="home">
                  <span className="text-enabled">
                    <PlaceOutlinedIcon className="icon" /> Home
                  </span>
                </div>

                <div className="date">
                  <span className="text-enabled">
                    <CalendarTodayOutlinedIcon /> Select date
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="order-btn-container">
            {cart.length === 0 ? (
              <button className="order-btn disabled-btn">order now</button>
            ) : (
              <button className="order-btn">order now</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
