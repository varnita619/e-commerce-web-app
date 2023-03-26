import React from "react";
import "./Filter.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useAllContext } from "../../context/context";

export const Filter = () => {
  const { productState, productDispatch, getUniqueCategory } = useAllContext();
  const { category, priceRange } = productState;
  return (
    <>
      <div className="side-list">
        <div className="sort-filters">
          <h3 className="filter-heading">Filters</h3>
          <p
            className="filter-btn"
            onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
          >
            <FilterAltOutlinedIcon />
          </p>
        </div>
      </div>

      <div className="side-list">
        <h4 className="list-topic">Cost</h4>
        <section className="checkbox-section">
          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              value="2000"
              checked={priceRange === "2000"}
              onChange={(e) =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: e.target.value,
                })
              }
            />
            Rs. 1500-2000
          </label>

          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              value="7000"
              checked={priceRange === "7000"}
              onChange={(e) =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: e.target.value,
                })
              }
            />
            Rs. 1500-7000
          </label>
          <label className="checkbox-title">
            <input
              type="checkbox"
              name="checkbox"
              value="8000"
              checked={priceRange === "8000"}
              onChange={(e) =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: e.target.value,
                })
              }
            />
            Rs. 7001+
          </label>
        </section>

        <h4 className="list-topic">Colour</h4>
        <section className="colour-section">
          <div className="red"></div>
          <div className="blue"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="green-yellow"></div>
        </section>

        <h4 className="list-topic">Design templates</h4>

        <section className="checkbox-section">
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" />2
          </label>

          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" />3
          </label>

          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" />
            3+
          </label>
        </section>

        <h4 className="list-topic">Type</h4>

        <section className="checkbox-section">
          {getUniqueCategory.map((eachCategory, i) => {
            return (
              <label className="checkbox-title" key={i}>
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={category.includes(eachCategory)}
                  onChange={() =>
                    productDispatch({
                      type: "GET_CATEGORY",
                      payload: eachCategory,
                    })
                  }
                />
                {eachCategory}
              </label>
            );
          })}
        </section>
      </div>
    </>
  );
};
