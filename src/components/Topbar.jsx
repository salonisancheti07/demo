import React from 'react';
import '../styles/Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <input className="search" type="text" placeholder="Search" />
      <div className="profile-icon">S</div>
    </div>
  );
};

export default Topbar;
