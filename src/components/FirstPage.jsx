import React from 'react';
import Header from '../layouts/header/Header';
import Main from '../layouts/main/Main';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BurgerPage from './BurgerPage';
import PizzaPage from './PizzaPage';
import SandwichPage from './SandwichPage';


export default function FirstPage() {
    return(
        <> 
        <Header />
        <Main />
        </>
    );
}