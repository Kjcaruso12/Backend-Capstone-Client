import React, { useState } from "react"
import { editProduct } from "../ProductsManager"

export const ProductDialogAddStock = ({ toggleStockDialog, currentProduct }) => {

    const [updatedStock, setUpdatedStock] = useState(currentProduct)

    const updateStock = (event) => {
        let copy = [...updatedStock]
        copy['quantity'] += event.target.value
        setUpdatedStock(copy)
    }

    return (
        <dialog id="dialog--stock" className="dialog--stock">
            <div>
                <h2>How much stock would you like to add?</h2>
                <input value={updatedStock.quantity} type="number" name="quantity" onChange={updateStock} required />
            </div>
            <div>
                <button
                    onClick={() => {
                        editProduct(updatedStock)
                    }
                    }>
                    Confirm
                </button>
                <button
                    id="closeButton"
                    onClick={toggleStockDialog}>
                    Cancel
                </button>
            </div>
        </dialog>
    )
}