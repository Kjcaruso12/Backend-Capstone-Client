import React, { useState, useEffect } from "react"
import { getProducts, getTopProducts } from "../products/ProductsManager"
import { getGroups } from "../groups/GroupManager"
import { getUsers } from "../users/UserManager"
import { MdOutlineInventory2 } from "react-icons/md"
import { AiOutlineGroup } from "react-icons/ai"
import { TbUsers } from "react-icons/tb"
import { TopSellingList } from "../products/TopSellingList"
import "./Dashboard.css"

export const Dashboard = () => {

    const [topProducts, setTopProducts] = useState()
    const [products, setProducts] = useState()
    const [groups, setGroups] = useState()
    const [users, setUsers] = useState()

    useEffect(
        () => {
            getProducts()
                .then(setProducts)
        }, []
    )

    useEffect(
        () => {
            getTopProducts()
                .then(setTopProducts)
        }
        , []
    )

    useEffect(
        () => {
            getGroups()
                .then(setGroups)
        }, []
    )

    useEffect(
        () => {
            getUsers()
                .then(setUsers)
        }, []
    )

    return (
        <div className="dashboard_container">
            <div className="dashboard_headers">
                <div className="total_items_container">
                    <div className="total_items_padding">
                        <div className="total_items_number">
                            <div className="total_items_header">
                                Items
                            </div>
                            <div className="total_items_count">
                                {products?.length}
                            </div>
                        </div>
                        <div className="total_items_icon">
                            {MdOutlineInventory2()}
                        </div>
                    </div>
                </div>
                <div className="total_groups_container">
                    <div className="total_groups_padding">
                        <div className="total_groups_number">
                            <div className="total_groups_header">
                                Groups
                            </div>
                            <div className="total_groups_count">
                                {groups?.length}
                            </div>
                        </div>
                        <div className="total_groups_icon">
                            {AiOutlineGroup()}
                        </div>
                    </div>
                </div>
                <div className="total_users_container">
                    <div className="total_users_padding">
                        <div className="total_users_number">
                            <div className="total_users_header">
                                Users
                            </div>
                            <div className="total_users_count">
                                {users?.length}
                            </div>
                        </div>
                        <div className="total_users_icon">
                            {TbUsers()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard_content">
                <div className="top_items_container">
                    <div className="top_items_padding">
                        <h2 className="top_items_header">
                            Top Selling Items
                        </h2>
                        <TopSellingList topProducts={topProducts} />
                    </div>
                </div>
                <div className="total_sales_container">

                </div>
            </div>
        </div>
    )
}