import { useCallback, useEffect, useReducer } from 'react';
import { fetchProducts, fetchCart, addCart } from './services/api';
import ProductBrowser from './components/ProductBrowser';
import { initialState, reducer } from './store/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async () => {
    try {
      const products = await fetchProducts();
      dispatch({ type: 'SET_PRODUCTS', payload: products });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
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
