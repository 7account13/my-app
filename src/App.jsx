import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Sidebar from "./Sidebar";
import './App.css'; // Add the CSS file for layout styling

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
