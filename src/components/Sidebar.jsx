import React from 'react';
import "../styles/Sidebar.css";
import { FaHome, FaGift, FaCube, FaTags, FaListUl, FaBoxOpen, FaCog, FaLink } from 'react-icons/fa';
import { BsFillBagFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">EVERSHOP</div>

      <div className="nav-section">
        <h4>QUICK LINKS</h4>
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaCube /> New Product</li>
          <li><FaGift /> New Coupon</li>
        </ul>
      </div>

      <div className="nav-section">
        <h4>CATALOG</h4>
        <ul>
          <li><FaCube /> Products</li>
          <li><FaLink /> Categories</li>
          <li><FaTags /> Collections</li>
          <li><FaListUl /> Attributes</li>
        </ul>
      </div>

      <div className="nav-section">
        <h4>SALE</h4>
        <ul>
          <li><BsFillBagFill /> Orders</li>
        </ul>
      </div>

      <div className="nav-section">
        <h4>CUSTOMER</h4>
        <ul>
          <li><FaCog /> Setting</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
