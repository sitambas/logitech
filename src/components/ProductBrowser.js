// ProductBrowser.js
import React, { useEffect, useState } from 'react';
import ProductList from './subComponents/ProductList';
import ProductCard from './atoms/ProductCard';
import Button from './atoms/Button';
import Tabs from './subComponents/Tabs';

const ProductBrowser = ({productsData,removeFromProduct,resetData}) => {
  const [products,setProducts] = useState(productsData);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const handleTabClick = (index) => {
    setSelectedProductIndex(index);
  };
  useEffect(()=>{
    setProducts(productsData)},[productsData]
  )
  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-50 min-h-screen">
        <div className="mt-4 float-right bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Cart: items</div>
        <div className="clear-both"/>
        <hr className="mb-4 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
        <h1 className="text-3xl text-left font-bold text-gray-800 ">Product Browser</h1>
        <p className="text-sm text-left text-gray-600 mb-4">Displaying {products.length} products</p>
        <div className="md:hidden">
                {products.length > 0 && <ProductList products={products} onRemove={removeFromProduct} />}
        </div>
        <div className="hidden md:block">
            <div className="flex justify-between items-center space-x-4 mb-4">
                <Tabs products={products} handleTabClick={handleTabClick} setSelectedProductIndex={setSelectedProductIndex} selectedProductIndex={selectedProductIndex}/>
            </div>
            {products.length > 0 && <ProductCard product={products[selectedProductIndex]} onRemove={removeFromProduct} />}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <Button classes="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300" text={'Reset'} onClick={resetData}/>
    </div>
  );
};

export default ProductBrowser;
