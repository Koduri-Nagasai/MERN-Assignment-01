import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: 'Rs.XX', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 'Rs.XX', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 'Rs.XX', image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
