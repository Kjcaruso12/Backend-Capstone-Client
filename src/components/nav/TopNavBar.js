import React, { useState } from "react"
import { ProfileNavDropDown } from "./ProfileDropdown"
import { RiArrowDropDownLine } from "react-icons/ri"
import "./NavBar.css"

export const TopNavBar = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  window.onclick = function (event) {
    if (!event.target.matches('.profile_button')) {
        setIsOpen(false)
    }
}

  return (
    profile ?
      <div className="top_nav">
        <div className="company_logo">
          <h2>All-In1nventory</h2>
        </div>
        <div className="profile_dropdown">
          <button onClick={toggleDropdown} className="profile_button">
            <div className="dropdown_username">{profile.user.username}</div>
            <div className="dropdown_icon">{RiArrowDropDownLine()}</div>
          </button>
          <ProfileNavDropDown isOpen={isOpen}/>
        </div>
      </div>
      : ""
  )
}
