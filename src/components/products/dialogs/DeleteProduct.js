import React from "react"
import { deleteProduct } from "../ProductsManager"

export const ProductDialogDelete = ({ toggleProductDeleteDialog, currentProduct, fetchProducts }) => {

    const deleteRefresh = () => {
        deleteProduct(currentProduct)
            .then(() => {fetchProducts()})
        toggleProductDeleteDialog()
    }

    return (
        <dialog id="dialog--product_delete" className="dialog--product_delete">
            <div>
                <h2>Are you sure you want to delete this product?</h2>
            </div>
            <div>
                <button
                    onClick={() => {deleteRefresh()}}>
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