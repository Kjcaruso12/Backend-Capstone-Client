import React, { useEffect, useRef, useState } from "react"
import { editProduct } from "../ProductsManager"
import { getGroups } from "../../groups/GroupManager"
import { AiOutlineClose, AiFillCamera } from "react-icons/ai"

export const ProductDialogForm = ({ toggleProductFormDialog, currentProduct, editMode }) => {

    const [updatedProduct, setUpdatedProduct] = useState(currentProduct)
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0,
        description: "",
        quantity: 0,
        image_path: "",
        group_id: 0
    })
    const [groups, setGroups] = useState()
    const fileInputRef = useRef()

    const updateProduct = (event) => {
        if (editMode) {
            let copy = {...updatedProduct}
            event.target.name = event.target.value
            setUpdatedProduct(copy)
        }
        else {
            let copy = {...newProduct}
            event.target.name = event.target.value
            setNewProduct(copy)
        }
    }

    useEffect(
        () => {
            getGroups()
                .then(setGroups)
        }, []
    )

    useEffect(
        () => {
            if (editMode) {
                setUpdatedProduct(currentProduct)
            }
        }, [editMode]
    )

    return (
        <dialog id="dialog--product_form" className="dialog--product_form">
            {currentProduct ?
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
                                {currentProduct.img_path != null && editMode ?
                                    <img src={currentProduct.img_path} alt="Product Image" />
                                    : <div>{AiFillCamera()}</div>
                                }
                            </button>
                            <input onChange={updateProduct} multiple={false} ref={fileInputRef} type="file" name="image_path" hidden />
                        </div>
                    </div>
                    <div>
                        <h2>Name</h2>
                        <input value={editMode ? updatedProduct.name : newProduct.name} type="text" name="name" onChange={updateProduct} required />
                    </div>
                    <div>
                        <h2>Description</h2>
                        <input value={editMode ? updatedProduct.description : newProduct.description} type="text" name="description" onChange={updateProduct} required />
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
                        <input value={editMode ? updatedProduct.price : newProduct.price} type="number" name="price" min="0" step=".01" onChange={updateProduct} required />
                    </div>
                    <div>
                        <h2>Group</h2>
                        <div className="=dropdown">
                            <select name="group_id" onChange={updateProduct} value={editMode ? updatedProduct.group_id : newProduct.group_id}>
                                <option value={newProduct.group_id}>Select a Group...</option>
                                {groups?.map(group => {
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
                : ""
            }
        </dialog>
    )
}