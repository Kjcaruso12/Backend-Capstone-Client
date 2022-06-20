import React, { useState } from "react"
import { editProduct, getSingleProduct } from "../ProductsManager"

export const ProductDialogAddStock = ({ toggleStockDialog, currentProduct, fetchProducts, setCurrentProduct }) => {

    const [quantity, setQuantity] = useState(0)

    const updatedStock = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        description: currentProduct.description,
        quantity: currentProduct.quantity + quantity,
        image_path: currentProduct.image_path,
        group_id: currentProduct.group.id
    }

    const fetchUpdatedProduct = () => {
        getSingleProduct(updatedStock)
            .then(setCurrentProduct)
    }

    const updateStock = () => {
        editProduct(updatedStock)
            .then(() => fetchProducts())
                .then(() => fetchUpdatedProduct())
        setQuantity(0)
        toggleStockDialog()
    }

    return (
        <dialog id="dialog--stock" className="dialog--stock">
            <div>
                <h2>How much stock would you like to add?</h2>
                <input value={quantity} type="number" name="quantity" onChange={(e) => setQuantity(parseInt(e.target.value))} required />
            </div>
            <div>
                <button
                    onClick={updateStock}>
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