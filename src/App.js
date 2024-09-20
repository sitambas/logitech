import { useEffect, useReducer } from 'react';
import { fetchProducts, fetchCart } from './services/api';
import ProductBrowser from './components/ProductBrowser';
import { initialState, reducer } from './store/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async () => {
    const products = await fetchProducts();
    dispatch({ type: 'SET_PRODUCTS', payload: products });
    dispatch({ type: 'SET_COUNT', payload: products.length });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const removeFromProduct = (product) => {
    dispatch({ type: 'SET_PRODUCTS', payload: state?.products.filter(item => item.id !== product.id )});
  };
  const resetData =() =>{
    getProducts();
  }
  return (
    <div className="App">
        <div className="min-h-screen bg-gray-50">
          <ProductBrowser productsData={state?.products} removeFromProduct={removeFromProduct} resetData={resetData} />
        </div>
    </div>
  );
}

export default App;
