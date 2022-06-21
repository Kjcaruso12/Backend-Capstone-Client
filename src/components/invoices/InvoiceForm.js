import React, { useEffect, useState } from "react"
import { InvoiceProductView } from "../products/Product"
import { getProducts } from "../products/ProductsManager"
import { getCurrentOrder, getAllOrderProducts, addInvoice, deleteOrder } from "./InvoiceManager"
import { useHistory } from "react-router-dom"
import { OrderView } from "../orders/Order"

export const InvoiceForm = () => {
    const history = useHistory()
    const [allProducts, setAllProducts] = useState()
    const [allOrderProducts, setAllOrderProducts] = useState()
    const [currentOrder, setCurrentOrder] = useState({})

    useEffect(
        () => {
            getProducts()
                .then(setAllProducts)
        }, []
    )

    useEffect(
        () => {
            getCurrentOrder()
                .then(setCurrentOrder)
        }, []
    )

    useEffect(
        () => {
            getAllOrderProducts()
                .then(setAllOrderProducts)
        }, []
    )

    const submitInvoice = () => {
        const updatedInvoice = {
            order_id: currentOrder.id
        }
        addInvoice(updatedInvoice)
            .then(() => { history.push("/invoices") })
    }

    const refreshCart = () => {
        getAllOrderProducts()
            .then(setAllOrderProducts)
    }

    const clearCart = () => {
        deleteOrder(currentOrder)
            .then(() => setCurrentOrder())
    }

    return (
        <div className="invoice_container">
            <div className="inventory_invoice">
                <div className="inventory_header">
                    <h2>Inventory Management</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Product Code</th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts?.map((product) =>
                            <InvoiceProductView key={`product--${product.id}`}
                                product={product}
                                refreshCart={refreshCart}
                            />)}
                    </tbody>
                </table>
            </div>
            <div className="cart_container">
                <div className="order_cart">
                    <div className="order_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrder?.products ?
                                    allOrderProducts?.map((product) =>
                                        <OrderView key={`product--${product.id}`}
                                            product={product}
                                            refreshCart={refreshCart}
                                        />)
                                    : <div></div>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="cart_footer">
                        <div className="invoice_date">
                            <div>Date:</div>
                            <div>{currentOrder?.created_on}</div>
                        </div>
                        <div className="invoice_total">
                            <div>Total:</div>
                            <div>{currentOrder?.total}</div>
                        </div>
                    </div>
                </div>
                <div className="cart_buttons">
                    <button
                        className="submit_invoice"
                        onClick={() => submitInvoice()}>
                        Submit
                    </button>
                    <button
                        className="clear_order"
                        onClick={() => clearCart()}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}
