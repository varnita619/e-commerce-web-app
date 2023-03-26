import React, { useEffect, useState } from "react";
import "./Store.css";
import { Filter, ProductCard, Cart } from "./../../Component";
import SearchIcon from "@mui/icons-material/Search";
import { useAllContext } from "../../context/context";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useNavigate } from "react-router-dom";

export const Store = () => {
  const {
    filteredProducts,
    state: { cart },
    state: {search},
    setSearchTerm,
    dispatch,
    getSearchedProducts,
  } = useAllContext();
  //Search Term handler
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    if (setSearchTerm === "") {
      return;
    } else {
      if (searchKey === "") {
        return;
      } else {
        setSearchKey("");
        navigate("/");
        dispatch({ type: "SEARCH_QUERY", payload: searchKey });
      }
    }
  };
  return (
    <div className="store-container">
      <div className="filters-container">
        <Filter />
      </div>
      <div className="products-container">
        <div className="products-header">
          <h3 className="products-heading">Shoes</h3>

          <div className="action-btn">
            {/* <button className="sort-btn">sort by</button> */}
            <input
              placeholder="Search"
              value={searchKey}
              onChange={(event) => setSearchKey(event.target.value)}
            />
            <button className="btn-search" onClick={() => searchHandler()}>
              <SearchIcon />
            </button>
          </div>
        </div>
        {filteredProducts?.length > 0 ? (
          <div className="cards-container">
            {filteredProducts?.map((eachProduct, i) => {
              return <ProductCard eachProduct={eachProduct} key={i} />;
            })}
          </div>
        ) : (
          <h3>No products found</h3>
        )}
      </div>
      <div className="cart-container">
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
              <p>What&apos;s stopping you?</p>
            </div>
          )}
        </div>

        <div className="cart-extra-information">
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
  );
};
