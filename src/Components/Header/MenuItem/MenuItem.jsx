import React from 'react';
import './MenuItem.css'; // Стилі для MenuItem (опціонально)

const MenuItem = ({ text }) => {
  return (
    <div className="menu-item">
      <span>{text}</span>
    </div>
  );
}

export default MenuItem;
