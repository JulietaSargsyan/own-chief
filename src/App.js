import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import {
  BrowserRouter,
  Link
} from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
      <header>
          <Link to={'/second'}>Second page</Link>
      </header>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
