import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useModalInvoiceDelete } from "../hooks/useModal"
import { InvoiceDialogDelete } from "./dialogs/DeleteInvoice";
import { InvoiceView } from "./Invoice";
import { getInvoices } from "./InvoiceManager";
import "./Invoices.css"

export const Invoices = () => {
    const [allInvoices, setAllInvoices] = useState([])
    const [currentInvoice, setCurrentInvoice] = useState()
    let { toggleInvoiceDeleteDialog, invoiceDeleteModalIsOpen } = useModalInvoiceDelete("#dialog--invoice_delete")
    const history = useHistory()


    const fetchInvoices = () => {
        getInvoices()
            .then(setAllInvoices)
    }

    useEffect(
        () => {
            fetchInvoices()
        }
        , []
    )

    const confirmInvoiceDelete = invoice => {
        setCurrentInvoice(invoice)
        toggleInvoiceDeleteDialog()
    }

    return (
        <div className="invoice_list">
            <InvoiceDialogDelete toggleInvoiceDeleteDialog={toggleInvoiceDeleteDialog} currentInvoice={currentInvoice} />
            <div className="invoice_header">
                <h2 className="header">Invoice Management</h2>
                <button
                    className="create_invoice"
                    onClick={() => history.push("/invoices/create")}>Create Invoice</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Invoice Id</th>
                        <th>Number of Items</th>
                        <th>Total</th>
                        <th>Created By</th>
                        <th>Added On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allInvoices?.map((invoice) =>
                        <InvoiceView key={`invoice--${invoice.id}`}
                            invoice={invoice}
                            confirmInvoiceDelete={confirmInvoiceDelete}
                        />)
                    }
                </tbody>
            </table>
        </div>
    )
}