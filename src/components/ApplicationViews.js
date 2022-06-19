import React, { useState, useEffect } from "react"
import { getProfile } from "./users/UserManager"
import { RouteViews } from "./Routes"
import { TopNavBar } from "./nav/TopNavBar"
import { SideNavBar } from "./nav/SideNavBar"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(
        () => {
            getProfile()
                .then(setCurrentUser)
        }, []
    )

    return (
        currentUser ?
            <div className="layout">
                <TopNavBar profile={currentUser} />
                <div className="body_container">
                    <SideNavBar currentUser={currentUser} />
                    <RouteViews />
                </div>
            </div>
            : ""
    )
}
