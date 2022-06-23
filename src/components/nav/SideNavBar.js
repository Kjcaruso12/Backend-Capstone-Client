import React from "react"
import { Link } from "react-router-dom"
import { MdOutlineDashboard, MdOutlineInventory2 } from "react-icons/md"
import { AiOutlineGroup } from "react-icons/ai"
import { TbFileInvoice, TbUsers } from "react-icons/tb"
import "./NavBar.css"

export const SideNavBar = ({ currentUser }) => {
    //   const history = useHistory()

    const style = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className="side_bar">
            <ul>
                <li>
                    <Link
                        className="sidenav_link"
                        style={style}
                        to="/">
                        <div className="sidebar_icon">{MdOutlineDashboard()}</div>
                        <div className="dashboard">Dashboard</div>
                    </Link>
                </li>
                <li>
                    <Link
                        className="sidenav_link"
                        style={style}
                        to="/inventory">
                        <div className="sidebar_icon">{MdOutlineInventory2()}</div>
                        <div className="inventory">Inventory</div>
                    </Link>
                </li>
                <li>
                    <Link
                        className="sidenav_link"
                        style={style}
                        to="/groups">
                        <div className="sidebar_icon">{AiOutlineGroup()}</div>
                        <div className="groups">Groups</div>
                    </Link>
                </li>
                <li>
                    <Link
                        className="sidenav_link"
                        style={style}
                        to="/invoices">
                        <div className="sidebar_icon">{TbFileInvoice()}</div>
                        <div className="invoices">Invoices</div>
                    </Link>
                </li>
                {currentUser.admin ?
                    <li>
                        <div className="sidebar_icon">{TbUsers()}</div>
                        <div className="users">User Management</div>
                    </li>
                    : ""
                }
            </ul>
        </div>
    )
}