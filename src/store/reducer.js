// Define action type constants
  const SET_PRODUCTS = 'SET_PRODUCTS';
  const SET_COUNT = 'SET_COUNT';
  const REMOVE_FROM_PRODUCTS = 'REMOVE_FROM_PRODUCTS';

// Initial state
  export const initialState = {
    products: [],
    carts:[]
  };

// Reducer function
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        // Ensure payload is an array
        if (!Array.isArray(action.payload)) {
          console.error('SET_PRODUCTS action payload should be an array');
          return state;
        }
        return { ...state, products: action.payload };
      case 'SET_CART_ITEM':
        // Ensure payload is a object
        if (typeof action.payload !== 'object') {
          console.error('SET_CART_ITEM action payload should be an array');
          return state;
        }
        return { ...state, carts: action.payload };
      case 'REMOVE_FROM_PRODUCTS':
        // Ensure payload has an id property
        if (!action.payload || typeof action.payload.id === 'undefined') {
          console.error('REMOVE_FROM_PRODUCTS action payload should have an id property');
          return state;
        }
        return {
          ...state,
          products: state.products.filter(item => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  