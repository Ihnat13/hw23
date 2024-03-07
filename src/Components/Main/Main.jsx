import React from 'react';
import Description from './Descr/Descr.jsx';
import Logo from './Logo/Logo.jsx';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Description />
      <Logo />
    </main>
  );
}

export default Main;
