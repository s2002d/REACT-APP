// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <Link to="https://en.wikipedia.org/wiki/Coffee" onClick={toggleSidebar}>Home</Link>
        </li>
        <li>
          <Link to="https://www.britannica.com/topic/coffee" onClick={toggleSidebar}>About</Link>
        </li>
        <li>
          <Link to="https://nutritionsource.hsph.harvard.edu/food-features/coffee/" onClick={toggleSidebar}>Menu</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Sidebar;
