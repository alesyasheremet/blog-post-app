// Navbar.tsx

import React, { useState } from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
     <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className="navbar-menu flex bg-blue-500 text-white p-4">
        <li className="ml-4">
          <a
            href="#"
            onClick={() => setActiveItem(1)}
            className={activeItem === 1 ? 'active' : ''}
          >
            Option 1
          </a>
        </li>
        <li className="ml-auto">
          <a
            href="#"
            onClick={() => setActiveItem(2)}
            className={activeItem === 2 ? 'active' : ''}
          >
            Option 2
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
