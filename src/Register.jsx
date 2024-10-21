import React from "react";
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      <form className="register-form">
        <label className="register-label">Username</label>
        <input type="text" className="register-input" required />

        <label className="register-label">Email</label>
        <input type="email" className="register-input" required />

        <label className="register-label">Password</label>
        <input type="password" className="register-input" required />

        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
