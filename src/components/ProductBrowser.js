import React, { useEffect, useState } from 'react';
import ProductList from './subComponents/ProductList';
import CustomButton from './atoms/CustomButton';
import Tabs from './subComponents/Tabs';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import Shimmer from './common/shimmer';


const ProductBrowser = ({productsData=[],removeProduct,resetData,cart={}}) => {
  const [products,setProducts] = useState(productsData || []);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);


  const handleTabClick = (index) => {
    setSelectedProductIndex(index);
  };
  useEffect(()=>{
    setProducts(productsData)},
    [productsData]
  )
  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-50 min-h-screen">
        <div className="mt-4 float-right bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Cart: { cart.totalProducts} items</div>
        <div className="clear-both"/>
        <hr className="mb-4 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
        <h1 className="text-3xl text-left font-bold text-gray-800 ">Product Browser</h1>
        <p className="text-sm text-left text-gray-600 mb-4">Displaying {products.length} products</p>
        <div>
            <div className="hidden md:block">
                <div className="flex justify-between items-center space-x-4 mb-4">
                    <Tabs products={products} handleTabClick={handleTabClick} setSelectedProductIndex={setSelectedProductIndex} selectedProductIndex={selectedProductIndex}/>
                </div>
            </div>
            {products.length > 0 ? <ProductList products={isMobile ? products : [products[selectedProductIndex]]} onRemove={removeProduct} />: <Shimmer/>}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <CustomButton classes="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300" text={'Reset'} onClick={resetData}/>
    </div>
  );
};

ProductBrowser.propTypes = {
  productsData: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired,
};

export default ProductBrowser;
