import React, { useEffect, useState } from "react"
import { deleteProduct, editProduct } from "./ProductsManager"
import { getGroups } from "../groups/GroupManager"
import { AiOutlineClose } from "react-icons/ai"
import { MdPhotoCamera } from "react-icons/md"

const ProductDialogAddStock = ({ toggleStockDialog, currentProduct }) => {

    const [updatedStock, setUpdatedStock] = useState(currentProduct)

    const updateStock = (event) => {
        let copy = [...updatedStock]
        copy[quantity] = event.target.value
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
                        <h2>Price</h2>
                        <div>${currentProduct.price}</div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export const ProductDialogEdit = ({ toggleProductEditDialog, currentProduct }) => {

    const [updatedProduct, setUpdatedProduct] = useState(currentProduct)
    const [groups, setGroups] = useState()

    const updateProduct = (event) => {
        let copy = [...updatedStock]
        event.target.name = event.target.value
        setUpdatedProduct(copy)
    }

    useEffect(
        () => {
            getGroups()
                .then(setGroups)
        }, []
    )

    return (
        <dialog id="dialog--edit_product" className="dialog--edit_product">
            <div>
                <div>
                    <h2>Edit Item</h2>
                    <button
                        className="exit_product_view"
                        onClick={toggleProductEditDialog}>
                        {AiOutlineClose()}
                    </button>
                </div>
                <div>
                    {currentProduct.img_path != null ?
                        <img src={currentProduct.img_path} alt="Product Image" />
                        :
                        <div>
                            {MdPhotoCamera()}
                        </div>
                    }
                </div>
                <div>
                    <h2>Name</h2>
                    <input value={updatedProduct.name} type="text" name="name" onChange={updateProduct} required />
                </div>
                <div>
                    <h2>Description</h2>
                    <input value={updatedProduct.description} type="text" name="description" onChange={updateProduct} required />
                </div>
                <div>
                    <h2>Price</h2>
                    <input value={updatedProduct.price} type="number" name="price" min="0" step=".01" onChange={updateProduct} required />
                </div>
                <div>
                    <h2>Group</h2>
                    <div className="=dropdown">
                        <select name="group_id" onChange={updateProduct}>
                            {groups.map(group => {
                                <option value={group.id} name={group.name}>{group.label}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <button className="submit-button"
                        onClick={
                            () => {
                                editProduct(updatedProduct)
                            }
                        }>Submit
                    </button>
                </div>
            </div>
        </dialog>
    )
}