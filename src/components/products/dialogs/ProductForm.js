import React, { useEffect, useRef, useState } from "react"
import { addProduct, editProduct } from "../ProductsManager"
import { getGroups } from "../../groups/GroupManager"
import { AiOutlineClose, AiFillCamera } from "react-icons/ai"
import "./Dialog.css"

export const ProductDialogForm = ({ toggleProductFormDialog, currentProduct, setCurrentProduct, editMode, fetchProducts }) => {

    const [groups, setGroups] = useState()
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0,
        description: "",
        quantity: 0,
        image_path: "",
        group_id: 0
    })
    const fileInputRef = useRef()

    const updateProduct = (event) => {
        if (editMode) {
            let copy = { ...currentProduct }
            if (event.target.name === "group_id") {
                copy['group']['id'] = parseInt(event.target.value)
            }
            else {
                copy[event.target.name] = event.target.value
            }
            setCurrentProduct(copy)
        }
        else {
            let copy = { ...newProduct }
            if (event.target.name === "group_id") {
                copy[event.target.name] = parseInt(event.target.value)
            }
            else {
                copy[event.target.name] = event.target.value
            }
            setNewProduct(copy)
        }
    }

    const submitProduct = () => {
        const updatedProduct = {
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            description: currentProduct.description,
            quantity: currentProduct.quantity,
            image_path: currentProduct.image_path,
            group_id: currentProduct.group.id
        }

        if (editMode) {
            editProduct(updatedProduct)
                .then(() => fetchProducts())
        }
        else {
            addProduct(newProduct)
                .then(() => fetchProducts())
        }
        toggleProductFormDialog()
    }

    useEffect(
        () => {
            getGroups()
                .then(setGroups)
        }, []
    )

    return (
        <dialog id="dialog--product_form" className="dialog--product_form">
            {editMode && currentProduct ?
                <div>
                    <div>
                        <button
                            className="exit_product_view"
                            onClick={toggleProductFormDialog}>
                            {AiOutlineClose()}
                        </button>
                        <h2>{editMode ? "Edit Product" : "Add Product"}</h2>
                    </div>
                    <div>
                        <div>
                            <button onClick={() => fileInputRef.current.click}>
                                {currentProduct.image_path != null && editMode ?
                                    <img src={currentProduct.image_path} alt="Product Image" />
                                    : <div>{AiFillCamera()}</div>
                                }
                            </button>
                            <input onChange={updateProduct} multiple={false} ref={fileInputRef} type="file" name="image_path" hidden />
                        </div>
                    </div>
                    <div>
                        <h2>Name</h2>
                        <input value={editMode ? currentProduct.name : newProduct.name} type="text" name="name" onChange={updateProduct} required />
                    </div>
                    <div>
                        <h2>Description</h2>
                        <input value={editMode ? currentProduct.description : newProduct.description} type="text" name="description" onChange={updateProduct} required />
                    </div>
                    {!editMode ?
                        <div>
                            <h2>Quantity</h2>
                            <input value={newProduct.quantity} type="number" name="quantity" onChange={updateProduct} required />
                        </div>
                        : ""
                    }
                    <div>
                        <h2>Price</h2>
                        <input value={editMode ? currentProduct.price : newProduct.price} type="number" name="price" min="0" step=".01" onChange={updateProduct} required />
                    </div>
                    <div>
                        <h2>Group</h2>
                        <div className="dropdown" name="group_id">
                            <select name="group_id" onChange={updateProduct} value={currentProduct.group.id}>
                                <option value={0}>Select a Group...</option>
                                {groups?.map((group, index) => {
                                    return <option value={group.id} name="group_id" key={index}>{group.label}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div>
                        <button
                            className="exit_product_view"
                            onClick={toggleProductFormDialog}>
                            {AiOutlineClose()}
                        </button>
                        <h2>{editMode ? "Edit Product" : "Add Product"}</h2>
                    </div>
                    <div>
                        <div>
                            <button onClick={() => fileInputRef.current.click}>
                                <div>{AiFillCamera()}</div>
                            </button>
                            <input onChange={updateProduct} multiple={false} ref={fileInputRef} type="file" name="image_path" hidden />
                        </div>
                    </div>
                    <div>
                        <h2>Name</h2>
                        <input value={editMode ? currentProduct.name : newProduct.name} type="text" name="name" onChange={updateProduct} required />
                    </div>
                    <div>
                        <h2>Description</h2>
                        <input value={editMode ? currentProduct.description : newProduct.description} type="text" name="description" onChange={updateProduct} required />
                    </div>
                    {!editMode ?
                        <div>
                            <h2>Quantity</h2>
                            <input value={newProduct.quantity} type="number" name="quantity" onChange={updateProduct} required />
                        </div>
                        : ""
                    }
                    <div>
                        <h2>Price</h2>
                        <input value={editMode ? currentProduct.price : newProduct.price} type="number" name="price" min="0" step=".01" onChange={updateProduct} required />
                    </div>
                    <div>
                        <h2>Group</h2>
                        <div className="dropdown" name="group_id">
                            <select name="group_id" onChange={updateProduct} value={newProduct.group_id}>
                                <option value={0}>Select a Group...</option>
                                {groups?.map((group, index) => {
                                    return <option value={group.id} name="group_id" key={index}>{group.label}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            }
            <div>
                <button className="submit-button"
                    onClick={() => submitProduct()}>
                    Submit
                </button>
            </div>
        </dialog>
    )
}