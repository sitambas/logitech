import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './../atoms/ProductCard';

const ProductList = ({ products=[], onRemove,setSelectedProductIndex,selectedProductIndex }) => {
    if(!products[0]) return setSelectedProductIndex(selectedProductIndex - 1 )
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
