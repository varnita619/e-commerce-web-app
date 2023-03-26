import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./../reducer/Reducers";
import { products } from "./../database/products";
import { uniqueCategory } from "./../Utils/uniqueCategory";
import { filterByCategory } from "./../Utils/filterByCategory";
import { filterByPriceRange } from "./../Utils/filterByPriceRange";
import { searchProducts } from "../Utils/searchedProducts.js";

const Cart = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    search:""
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    priceRange: 8000,
    category: [],
    search: "",
  });

  const { category, priceRange, search } = productState;

  // Get unique Category Name
  const getUniqueCategory = uniqueCategory(products, "category");
  //   Filter By Price Range
  const getFilterByPriceRange = filterByPriceRange(products, priceRange);
  //   Filter By Category
  const getFilterByCategory = filterByCategory(getFilterByPriceRange, category);

  const filteredProducts = getFilterByCategory;

  const getSearchedProducts = searchProducts(filteredProducts, search);
  console.log(getSearchedProducts, search)

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        productState,
        productDispatch,
        filteredProducts,
        getUniqueCategory,
        getSearchedProducts,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

const useAllContext = () => useContext(Cart);

export { ContextProvider, useAllContext };
