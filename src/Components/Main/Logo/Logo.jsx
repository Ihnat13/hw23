import React from 'react';
import logoImage from './logo.png'; // Припустимо, що ваше зображення лого знаходиться в тій самій папці, що і цей файл
// import './Logo.css'; // Стилі для Logo (опціонально)

const Logo = () => {
  return (
    <div className="Logo">
      <img src={logoImage} alt="Logo" />
    </div>
  );
}

export default Logo;
