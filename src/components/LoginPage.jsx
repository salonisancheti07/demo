import React from 'react';
import './App.css';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-placeholder">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
            alt="Logo" 
            className="logo" 
          />
        </div>
        <form className="login-form">
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-button">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
