import React from 'react';
import '../styles/ProductTable.css';
// At the top of ProductTable.jsx
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Nike revolution 5',
    price: 255,
    sku: 'NJC44203-Brown-M',
    stock: 834,
    image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e783e052-9360-4afb-adb8-c4e9c0f5db07/NIKE+AIR+MAX+NUAXIS.png',
    status: 'active'
  },
  {
    id: 2,
    name: 'Nike react phantom run flyknit 2',
    price: 718,
    sku: 'NJC48508-Green-S',
    stock: 0,
    image: '/images/shoe2.png',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Nike court vision low',
    price: 904,
    sku: 'NJC78436-Black-X',
    stock: 553,
    image: '/images/shoe3.png',
    status: 'active'
  }
];

const ProductTable = () => {
  return (
    <div className="product-table-container">
      <input className="search-bar" type="text" placeholder="Search" />
      <table className="product-table">
        <thead>
          <tr>
            <th></th>
            <th>THUMBNAIL</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>STOCK</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td><input type="checkbox" /></td>
              <td><img src={p.image} alt={p.name} className="thumb" /></td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.sku}</td>
              <td>{p.stock}</td>
              <td>
                <span className={`status-dot ${p.status === 'active' ? 'green' : 'gray'}`}></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
