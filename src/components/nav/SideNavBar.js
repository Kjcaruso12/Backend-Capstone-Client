import React from "react"
import { useHistory } from "react-router-dom"
import { MdOutlineDashboard, MdOutlineInventory2 } from "react-icons/md"
import { AiOutlineGroup } from "react-icons/ai"
import { TbFileInvoice, TbUsers } from "react-icons/tb"
import "./NavBar.css"

export const SideNavBar = ({ currentUser }) => {
    //   const history = useHistory()

    return (
            <div className="side_bar">
                <ul>
                    <li>
                        <div className="sidebar_icon">{MdOutlineDashboard()}</div>
                        <div className="dashboard">Dashboard</div>
                    </li>
                    <li>
                        <div className="sidebar_icon">{MdOutlineInventory2()}</div>
                        <div className="inventory">Inventory</div>
                    </li>
                    <li>
                        <div className="sidebar_icon">{AiOutlineGroup()}</div>
                        <div className="groups">Groups</div>
                    </li>
                    <li>
                        <div className="sidebar_icon">{TbFileInvoice()}</div>
                        <div className="invoices">Invoices</div>
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