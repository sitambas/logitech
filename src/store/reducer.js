export const initialState = {
    products: [],
    count:0
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload };
      case 'SET_COUNT':
        return { ...state, count: action.payload };
      case 'REMOVE_FROM_PRODUCTS':
        return {
          ...state,
          products: state.products.filter(item => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  