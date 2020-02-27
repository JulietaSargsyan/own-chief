import React from 'react';
import './App.css';
import Firstpage from './firstPageHeader';
import Category from './categoryList';
import Products from './productsList';

function App() {
  return ( 
    <>
    <Firstpage />
    <div className="second">
      <Category />
      <Products />
    </div>
    </>
  );
}

export default App;
