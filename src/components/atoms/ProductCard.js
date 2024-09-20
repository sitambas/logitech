import React from 'react';
import CustomButton from './CustomButton';
import PropTypes from 'prop-types';

const ProductCard = ({ product={}, onRemove=() => {} }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-md "   role="Product Description" aria-labelledby={product.title}>
      <div>
        <h2 className="text-left font-bold text-lg text-gray-800 mb-2" aria-label={`Product Title ${product.title}`}>{product.title}</h2>
        <p className="text-left text-sm text-gray-600 mb-2" aria-label={`Product Price ${product.price}`}>{product.price}</p>
        <p className="text-left text-sm text-gray-700" >{product.description}</p>
      </div>
      <div className="mt-2">
        <CustomButton  ariaLabel={`Remove ${product?.title}`} classes="float-right bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm" text={'Remove Product'} onClick={() => onRemove(product)}/>
        <div className='clear-both'></div>
      </div>
    </div>
  );
};


ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,   
};


export default ProductCard;

