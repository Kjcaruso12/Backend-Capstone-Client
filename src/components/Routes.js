import React from "react";
import { Route } from "react-router-dom";
import { Inventory } from "./products/ProductList";
import { Dashboard } from "./dashboard/Dashboard";
import { Groups } from "./groups/GroupList";
import { Invoices } from "./invoices/InvoicesList";
import { InvoiceForm } from "./invoices/InvoiceForm";

export const RouteViews = () => {
    return (
        <div className="main-content">
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/invoices">
                <Invoices />
            </Route>
            <Route path="/invoices/create">
                <InvoiceForm />
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