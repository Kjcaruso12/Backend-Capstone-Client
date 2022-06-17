import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { TopNavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const InventoryApp = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("auth_token")) {
                return <>
                    <Route>
                        <TopNavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)
