import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ProductPage from './components/ProductPage';
import './styles/App.css'; // optional, if needed

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <ProductPage />
      </div>
    </div>
    
  );
};

export default App;
