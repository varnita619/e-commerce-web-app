import React, { useEffect, useState } from "react";
import "./SingleProductCard.css";
import { useAllContext } from "../../context/context";
import { useParams } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

export const SingleProductCard = () => {
  const {
    state: { products },
    dispatch,
  } = useAllContext();
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.find((eachProduct) => eachProduct._id === productId));
  }, [products, productId]);

  return (
    <div className="designSpace">
      <div className="designContainer">
        <div className="design">
          <div className="mainImage">
            <div className="shoes">
              <img src={product?.imageURL} alt="product" className="shoe-img" />
            </div>
            <div className="shoeRate">
              <div className="rateProduct">
                <p className="product">Rate Product</p>
              </div>
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">
                  1 star
                </label>
              </div>
              {/*  star image */}
            </div>
          </div>
          <div className="optionShoes">
            <div className="shoes1">
              <img src={product?.imageURL} alt="product" />
            </div>
            <div className="shoes1">
              <img src={product?.imageURL} alt="product" />
            </div>
            <div className="shoes1">
              <img src={product?.imageURL} alt="product" />
            </div>
          </div>
          <div className="preferenceShoes">
            <div className="name">
              <p className="product">{product?.name}</p>
              <p className="company">{product?.desc}</p>
            </div>

            <div className="review">
              <span className=" checked">
                <StarOutlinedIcon />
              </span>
              <span className=" checked">
                <StarOutlinedIcon />
              </span>
              <span>
                <StarOutlinedIcon />
              </span>
              <span>
                <StarOutlinedIcon />
              </span>
              <span>
                <StarOutlinedIcon />
              </span>
              <p className="reviews">{product?.reviews}</p>
            </div>

            <div className="price">
              <p className="cost">Rs. {product?.price}/-</p>
              <p className="discount">
                Get an exclusive 20% off shopping with HDFC bank
              </p>
            </div>

            <div className="prod-details">
              <div className="block-container">
                <p className="size">Front</p>
                <div className="front1 block"></div>
                <div className="front2 block"></div>
                <div className="front3 block"></div>
              </div>

              <div className="block-container">
                <p className="size">Midd</p>
                <div className="front1 block"></div>
                <div className="front2 block"></div>
                <div className="front3 block"></div>
              </div>

              <div className="block-container">
                <p className="size">Back</p>
                <div className="front1 block"></div>
                <div className="front2 block"></div>
                <div className="front3 block"></div>
              </div>

              <div className="block-container">
                <p className="size">Sole</p>
                <div className="sole1 block"></div>
                <div className="sole2 block"></div>
                <div className="sole3 block"></div>
              </div>
              <div className="size">
                <p className="size">Size</p>
                <ul>
                  <li className="shoe-size">
                    <input
                      type="checkbox"
                      id="check_1"
                      name="check_1"
                      value="check_1"
                      className="shoe-size-input"
                    />
                    <label for="check_1">7</label>
                  </li>
                  <li className="shoe-size">
                    <input
                      type="checkbox"
                      id="check_2"
                      name="check_2"
                      value="check_2"
                      className="shoe-size-input"
                    />
                    <label for="check_2">8</label>
                  </li>
                  <li className="shoe-size">
                    <input
                      type="checkbox"
                      id="check_3"
                      name="check_3"
                      value="check_3"
                      className="shoe-size-input"
                    />
                    <label for="check_3">9</label>
                  </li>
                  <li className="shoe-size">
                    <input
                      type="checkbox"
                      id="check_4"
                      name="check_4"
                      value="check_4"
                      className="shoe-size-input"
                    />
                    <label for="check_4">10</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonLink">
          <div className="button1">
            <button className="share-btn">Share design</button>
          </div>
          <div className="button2">
            <button
              className="add-to-cart-btn"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
