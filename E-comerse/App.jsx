// App.jsx
import React from 'react';
import ShoppingCart from './E-comerse/Shoping';
import './E-comerse/Shop.css'; // Import your CSS file

const App = () => {
  return (
    <div className="App">
      <div className="shopping-cart-container">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default App;
