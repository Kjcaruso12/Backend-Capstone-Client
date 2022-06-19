import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { ProductDialogAddStock } from "./AddStock"

export const ProductDialogView = ({ toggleViewDialog, currentProduct }) => {

    return (
        <dialog id="dialog--product_view" className="dialog--product_view">
            <div>
                <ProductDialogAddStock toggleStockDialog={toggleStockDialog} currentProduct={currentProduct} />
                <div>
                    <button
                        className="exit_product_view"
                        onClick={toggleViewDialog}>
                        {AiOutlineClose()}
                    </button>
                </div>
                <div className="product_view_header">
                    <h1>Product Stock History</h1>
                    <button
                        onClick={toggleStockDialog}>
                        Add Stock
                    </button>
                </div>
                <div>
                    <h2>Product Details</h2>
                    <div>
                        <h2>Product Code</h2>
                        <div>{currentProduct.id}</div>
                    </div>
                    <div>
                        <h2>Product Name</h2>
                        <div>{currentProduct.name}</div>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <div>{currentProduct.description}</div>
                    </div>
                    <div>
                        <h2>Group</h2>
                        <div>{currentProduct.group.label}</div>
                    </div>
                    <div>
                        <h2>Price</h2>
                        <div>${currentProduct.price}</div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}