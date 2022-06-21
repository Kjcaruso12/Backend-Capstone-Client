import React from "react"
import { AiFillDelete } from "react-icons/ai"

export const InvoiceView = ({ invoice, confirmInvoiceDelete }) => {

    return (
        <tr className="single_invoice">
            <td>{invoice.id}</td>
            <td>{invoice.number_purchased}</td>
            <td>{invoice.total}</td>
            <td>{invoice.inventoryUser.user.first_name} {invoice.inventoryUser.user.last_name}</td>
            <td>{invoice.invoiceDate}</td>
            <td>
                <button
                        className="delete_invoice"
                        onClick={() => confirmInvoiceDelete(invoice)}>{AiFillDelete()}</button>
            </td>
        </tr>
    )
}