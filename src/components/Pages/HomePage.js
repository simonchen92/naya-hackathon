import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section>
        <h1>Idea to Furniture</h1>
        <p>
          Naya Studio is a platform built to bring your unique furniture idea to
          life
        </p>
        <Link to="/get-started">
          <button>Get Started</button>
        </Link>
      </section>
    </div>
  );
};
