// import React from "react";
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import FirstPage from "./components/FirstPage";
// import BurgerPage from "./components/BurgerPage";
// import PizzaPage from './components/PizzaPage';
// import SandwichPage from './components/SandwichPage';

// const routes = [
//     {
//         path: '/',
//         component: FirstPage,
//         exact: true
//     },
//     {
//         path: '/burger',
//         component: BurgerPage,
//         exact: false
//     },
//     {
//         path: '/pizza',
//         component: PizzaPage,
//         exact: false
//     },
//     {
//         path: '/sandwich',
//         component: SandwichPage,
//         exact: false
//     }
// ];

// export default function AppRoutes() {

//     return (
//         <Switch>
//             {routes.map(route => {
//                 return (
//                     <Route exact={route.exact} component={route.component} path={route.path} />
//                 )
//             })}

//         </Switch>
//     )
// }