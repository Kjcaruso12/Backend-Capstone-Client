import { Link } from "react-router-dom"
import { Logout } from "../auth/Logout"

export const ProfileNavDropDown = ({ isOpen }) => {
    return (
        isOpen ?
            <div className="dropdown">
                <Link
                    className="profile_link"
                    to="/account">
                    Profile
                </Link>
                <Link
                    onClick={() => {
                        Logout()
                    }}
                    className="profile_link"
                    to="/login">
                    Log Out
                </Link>
            </div>
            : ""
    )
}