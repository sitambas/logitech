import React from 'react';
import ProductCard from './../atoms/ProductCard';

const ProductList = ({ products, onRemove }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
