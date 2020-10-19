import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="naya-home-link">naya</h1>
      </Link>
      <div className="navbar-menu">
        <Link to="/why-naya">
          <p className="why-naya-link">why naya?</p>
        </Link>
        <Link to="/how-it-works">
          <p className="how-it-works-link">how it works</p>
        </Link>
        <Link to="/login">
          <p className="login-link">login</p>
        </Link>
      </div>
    </div>
  );
};
