// Header.tsx
"use client"
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="headerNav">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
