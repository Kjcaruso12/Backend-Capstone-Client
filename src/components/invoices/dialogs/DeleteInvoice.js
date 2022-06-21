import React from "react"
import { deleteInvoice } from "../InvoiceManager"

export const InvoiceDialogDelete = ({ toggleInvoiceDeleteDialog, currentInvoice, fetchInvoices }) => {

    const deleteRefresh = () => {
        deleteInvoice(currentInvoice)
            .then(() => {fetchInvoices()})
        toggleInvoiceDeleteDialog()
    }

    return (
        <dialog id="dialog--invoice_delete" className="dialog--invoice_delete">
            <div>
                <h2>Are you sure you want to delete this invoice?</h2>
            </div>
            <div>
                <button
                    onClick={() => {deleteRefresh()}}>
                    Confirm
                </button>
                <button
                    id="closeButton"
                    onClick={toggleInvoiceDeleteDialog}>
                    Cancel
                </button>
            </div>
        </dialog>
    )
}