import React from "react"
import { deleteProduct } from "../ProductsManager"

export const ProductDialogDelete = ({ toggleProductDeleteDialog, currentProduct }) => {

    return (
        <dialog id="dialog--delete_product" className="dialog--delete_product">
            <div>
                <h2>Are you sure you want to delete this guide?</h2>
            </div>
            <div>
                <button
                    onClick={() => {
                        deleteProduct(currentProduct)
                    }
                    }>
                    Confirm
                </button>
                <button
                    id="closeButton"
                    onClick={toggleProductDeleteDialog}>
                    Cancel
                </button>
            </div>
        </dialog>
    )
}