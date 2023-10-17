// Navbar.tsx

import React, { useState } from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""} text-[18px]`}>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className="navbar-menu flex text-white p-4">
        <li className="mr-4">
          <a
            href="/"
            onClick={() => setActiveItem(1)}
            className={activeItem === 1 ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li className="mr-4">
          <a
            href="/archive"
            onClick={() => setActiveItem(2)}
            className={activeItem === 2 ? "active" : ""}
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
