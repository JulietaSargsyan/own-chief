import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Firstpage from "./firstPageHeader";
import SecondComponent from "./SecondComponent";

const routes = [
    {
        path: '/',
        component: Firstpage,
        exact: true
    },
    {
        path: '/second',
        component: SecondComponent,
        exact: false
    }
];

export default function AppRoutes() {

    return (
        <Switch>
            {routes.map(route => {
                return (
                    <Route exact={route.exact} component={route.component} path={route.path} />
                )
            })}

        </Switch>
    )
}