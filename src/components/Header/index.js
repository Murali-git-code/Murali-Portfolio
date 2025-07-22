// src/components/Header.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">MM</div>
        <nav className="navbar">
          <Link  to="/">Home</Link>
          <Link  to="/about">About</Link>
          <Link  to="/skills">Skills</Link>
          <Link  to="/projects">Projects</Link>
          <Link  to="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
