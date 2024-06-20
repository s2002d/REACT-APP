// src/components/Menu.js
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-container">
        <h2>Our Menu</h2>
        <section className="menu-section">
          <h3>Coffee</h3>
          <ul>
            <li>
              <div className="menu-item">
                <span className="item-name">Espresso</span>
                <span className="item-price">$3</span>
                <p className="item-description">Rich and bold espresso.</p>
              </div>
            </li>
            <li>
              <div className="menu-item">
                <span className="item-name">Latte</span>
                <span className="item-price">$4</span>
                <p className="item-description">Creamy latte with steamed milk.</p>
              </div>
            </li>
            <li>
              <div className="menu-item">
                <span className="item-name">Cappuccino</span>
                <span className="item-price">$4</span>
                <p className="item-description">Classic cappuccino with frothy milk.</p>
              </div>
            </li>
            <li>
              <div className="menu-item">
                <span className="item-name">Mocha</span>
                <span className="item-price">$5</span>
                <p className="item-description">Chocolate flavored mocha.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="menu-section">
          <h3>Tea</h3>
          <ul>
            <li>
              <div className="menu-item">
                <span className="item-name">Green Tea</span>
                <span className="item-price">$3</span>
                <p className="item-description">Refreshing green tea.</p>
              </div>
            </li>
            <li>
              <div className="menu-item">
                <span className="item-name">Chai Latte</span>
                <span className="item-price">$4</span>
                <p className="item-description">Spiced chai with steamed milk.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="menu-section">
          <h3>Pastries</h3>
          <ul>
            <li>
              <div className="menu-item">
                <span className="item-name">Croissant</span>
                <span className="item-price">$3</span>
                <p className="item-description">Buttery, flaky croissant.</p>
              </div>
            </li>
            <li>
              <div className="menu-item">
                <span className="item-name">Muffin</span>
                <span className="item-price">$2.5</span>
                <p className="item-description">Soft and moist muffin.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Menu;
