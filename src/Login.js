import React from "react";
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form">
        <label className="login-label">Email</label>
        <input type="email" className="login-input" required />

        <label className="login-label">Password</label>
        <input type="password" className="login-input" required />

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
