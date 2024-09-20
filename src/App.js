import { useCallback, useEffect, useReducer } from 'react';
import { fetchProducts, fetchCart, addCart } from './services/api';
import ProductBrowser from './components/ProductBrowser';
import { initialState, reducer } from './store/reducer';

function App() {
  // useReducer to manage for the products and cart
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetches product data from the API and updates the state using dispatch
  const getProducts = async () => {
    try {
      const products = await fetchProducts();
      dispatch({ type: 'SET_PRODUCTS', payload: products });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  // Fetches Cart data from the API and updates the state using dispatch
  const getCart = async () => {
    try {
      const products = await fetchCart();
      dispatch({ type: 'SET_CART_ITEM', payload: products });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  
  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  // Removes a product from the products list based on the product id
  const removeProduct = useCallback((product) => {
    dispatch({
      type: 'SET_PRODUCTS',
      payload: state?.products.filter(item => item.id !== product.id)
    });
  }, [state?.products]);

  const resetData = useCallback(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
        <div className="min-h-screen bg-gray-50">
          <ProductBrowser productsData={state?.products} cart={state?.carts} removeProduct={removeProduct} resetData={resetData} />
        </div>
    </div>
  );
}

export default App;
