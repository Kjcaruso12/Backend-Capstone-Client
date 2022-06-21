import React, { useState } from "react"
import { addToOrder } from "../invoices/InvoiceManager"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { GrFormView } from "react-icons/gr"
import { IoMdAdd } from "react-icons/io"


export const ProductView = ({ product, confirmProductDelete, openProductView, openProductEdit }) => {


    return (
        <tr className="single_product">
            <td>{product.id}</td>
            <td>{product.image_path != null ?
                <img src={product.image_path} alt="product_image" />
                : "N/A"}</td>
            <td>{product.name}</td>
            <td>{product.group.label}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.created_on}</td>
            <td>{product.user.user.first_name} {product.user.user.last_name}</td>
            <td><button
                className="edit_product"
                onClick={() => openProductEdit(product)}>{AiFillEdit()}</button>
                <button
                    className="delete_product"
                    onClick={() => confirmProductDelete(product)}>{AiFillDelete()}</button>
                <button
                    className="view_product"
                    onClick={() => openProductView(product)}>{GrFormView()}</button>
            </td>
        </tr>
    )
}

export const InvoiceProductView = ({ product, refreshCart }) => {

    const [newProduct, setNewProduct] = useState({
        id: product.id,
        quantity: 1
    })

    const updateProduct = (event) => {
        let copy = { ...newProduct }
        copy[event.target.name] = parseInt(event.target.value)
        setNewProduct(copy)
    }

    const updateCart = (updatedProduct) => {
        addToOrder(updatedProduct)
            .then(() => refreshCart())
            .then(() => {
                setNewProduct({
                    id: product.id,
                    quantity: 1
                })
            })
    }

    return (
        <tr className="single_product">
            <td>{product.id}</td>
            <td>{product.image_path != null ?
                <img src={product.image_path} alt="product_image" />
                : "N/A"}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
                <input value={newProduct.quantity} type="number" name="quantity" className="order_input" onChange={updateProduct} />
                <button
                    className="add_product"
                    onClick={() => updateCart(newProduct)}>
                    {IoMdAdd()} Add
                </button>
            </td>
        </tr>
    )
}