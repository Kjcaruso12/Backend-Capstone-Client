import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { InventoryApp } from "./components/InventoryApp"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <InventoryApp />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
