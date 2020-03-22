import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import BurgerPage from '../../components/BurgerPage';
import PizzaPage from '../../components/PizzaPage';
import SandwichPage from '../../components/SandwichPage';
import styles from './main.module.css';









export default function Main() {
    return(
        <BrowserRouter>
        <main className={styles.main}>
            <div className={styles.text}>
                <h2>Hi there!</h2>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor</p>
            </div>
            <div className={styles.foodType}>
                
                    <Link to={'/burger'}>
                        <div className={styles.burger}>
                            <img  src={'img/burger.png'} alt=""/>
                            <p>burger</p>
                        </div>
                    </Link>
                    <Link to={'/pizza'}>   
                        <div className={styles.pizza}>
                            <img src={'img/pizza.png'} alt=""/>
                            <p>pizza</p>
                        </div>
                    </Link> 
                    <Link to={'/sandwich'}> 
                         <div className={styles.sandwich}>
                            <img src={'img/sandwich.png'} alt=""/>
                            <p>sandwich</p>
                        </div>
                    </Link> 
                
                
                
            </div>
        </main>
        <Switch>
                    <Route path="/burger">
                        <BurgerPage />
                    </Route>
                    <Route path="/pizza">
                        <PizzaPage />
                    </Route>
                    <Route path="/sandwich">
                        <SandwichPage />
                    </Route>
                </Switch>
        </BrowserRouter>

    );
}

