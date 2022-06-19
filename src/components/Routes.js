import React from "react";
import { Route } from "react-router-dom";
import { Inventory } from "./products/ProductList";
import { Dashboard } from "./dashboard/Dashboard";
import { Groups } from "./groups/GroupList";

export const RouteViews = () => {
    return (
        <div className="main-content">
            <Route path="/">
                <Dashboard />
            </Route>
            <Route path="/inventory">
                <Inventory />
            </Route>
            <Route path="/groups">
                <Groups />
            </Route>
        </div>
    )
}