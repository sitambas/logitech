export const initialState = {
    products: [],
    carts:[]
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload };
      case 'SET_CART_ITEM':
        return { ...state, carts: action.payload };
      case 'REMOVE_FROM_PRODUCTS':
        return {
          ...state,
          products: state.products.filter(item => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  