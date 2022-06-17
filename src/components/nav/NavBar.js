import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getProfile } from "../users/UserManager"
import "./NavBar.css"

export const TopNavBar = () => {
  const history = useHistory()
  const [profile, setProfile] = useState()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(
    () => {
      getProfile()
        .then(setProfile)
    }, []
  )

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    profile ?
      <nav className="top_nav">
        <ul>
          <li className="nav_option">
            <h2>Inventory</h2>
          </li>
          <li className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">
                {profile.username}
              </button>
              {isOpen ?
                <div id="profileDropdown" className="dropdown-content">
                  <Link className="link" to="/profile">Profile</Link>
                  <Link className="link" to="/login">Log Out</Link>
                </div>
                : ""
              }
          </li>
        </ul>

        {/* {
          localStorage.getItem("auth_token") !== null ?
            <button onClick={() => {
              localStorage.removeItem("auth_token")
              history.push({ pathname: "/" })
            }}>
              Logout
            </button>
            :
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
        } */}
      </nav>
      : ""
  )
}
