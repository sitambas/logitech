import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './../atoms/ProductCard';

const ProductList = ({ products=[], onRemove }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,      
    onRemove: PropTypes.func.isRequired,       
};
  
export default ProductList;
