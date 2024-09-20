import React from 'react';
import Button from './Button';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-md ">
      <div>
        <h2 className="text-left font-bold text-lg text-gray-800 mb-2">{product?.title}</h2>
        <p className="text-left text-sm text-gray-600 mb-2">{product?.price}</p>
        <p className="text-left text-sm text-gray-700">{product?.description}</p>
      </div>
      <div className="">
        <Button classes="float-right bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm" text={'Remove Product'} onClick={() => onRemove(product)}/>
        <div className='clear-both'></div>
      </div>
    </div>
  );
};

export default ProductCard;

