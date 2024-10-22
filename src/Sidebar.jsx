import React from "react";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <ul className="sidebar-list">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
