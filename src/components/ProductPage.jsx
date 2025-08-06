import React from 'react';
import ProductTable from './ProductTable';
import '../styles/ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-header">
        <h2>Products</h2>
        <button className="new-product-btn">New Product</button>
      </div>
      <ProductTable />
    </div>
  );
};

export default ProductPage;
