import React from 'react';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import './App.css'; // Глобальні стилі (опціонально)

// export default () => {
//  
// };

const App = () => { 
  return ( 
<div className="app">
  <Header />
  <Main />
</div>
  ) 
} 


export default App