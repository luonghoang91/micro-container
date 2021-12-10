import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>React App</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Smartux</NavLink>
        </li>
        <li>
          <NavLink to="/coupon">Coupon</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
