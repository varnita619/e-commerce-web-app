export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, priceRange: action.payload };
    case "GET_CATEGORY":
      if (state.category.includes(action.payload)) {
        return {
          ...state,
          category: [...state.category].filter(
            (eachCategory) => eachCategory !== action.payload
          ),
        };
      }
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        search: action.payload,
      };
    case "CLEAR_FILTERS":
      return { priceRange: 8000, category: [], search: "" };
    default:
      return state;
  }
};
