import React, { useState, useEffect } from "react"
import { getProducts } from "./ProductsManager";
import { getProfile } from "../users/UserManager";
import { useModalDelete, useModalView, useModalStock, useModalProductForm } from "../hooks/useModal"
import { ProductView } from "./Product"
import { ProductDialogDelete } from "./dialogs/DeleteProduct"
import { ProductDialogView } from "./dialogs/ViewProduct";
import { ProductDialogForm } from "./dialogs/ProductForm";

export const Inventory = () => {
    const [allProducts, setAllProducts] = useState([])
    const [currentProduct, setCurrentProduct] = useState({})
    const [editMode, setEditMode] = useState(false)
    const [user, setUser] = useState()
    let { toggleProductDeleteDialog, productDeleteModalIsOpen } = useModalDelete("#dialog--product_delete")
    let { toggleViewDialog, productViewModalIsOpen } = useModalView("#dialog--product_view")
    let { toggleStockDialog, stockModalIsOpen } = useModalStock("#dialog--stock")
    let { toggleProductFormDialog, productFormModalIsOpen } = useModalProductForm("#dialog--product_form")

    useEffect(
        () => {
            getProfile()
                .then(setUser)
        }
        , []
    )

    useEffect(
        () => {
            getProducts()
                .then(setAllProducts)
        }
        , []
    )

    // useEffect(() => {
    //     const handler = e => {
    //         // event keyCode = escape button and modalIsOpen
    //         if (e.keyCode === 27 && ProductDeleteModalIsOpen) {
    //             // run toggleDialog()
    //             toggleProductDeleteDialog()
    //         }
    //     }
    //     // adds eventListener
    //     window.addEventListener("keyup", handler)
    //     // removes eventListener?
    //     return () => window.removeEventListener("keyup", handler)
    // }, [toggleProductDeleteDialog, ProductDeleteModalIsOpen])

    useEffect(() => {
        const handler = e => {
            // event keyCode = escape button and modalIsOpen
            if (e.keyCode === 27 && productViewModalIsOpen && stockModalIsOpen) {
                toggleStockDialog()
            }
            else if (e.keyCode === 27 && productViewModalIsOpen) {
                toggleViewDialog()
            }
            else if (e.keyCode === 27 && productDeleteModalIsOpen) {
                toggleProductDeleteDialog()
            }
            else if (e.keyCode === 27 && productFormModalIsOpen) {
                toggleProductFormDialog()
            }
        }
        // adds eventListener
        window.addEventListener("keyup", handler)
        // removes eventListener?
        return () => window.removeEventListener("keyup", handler)
    }, [toggleViewDialog, productViewModalIsOpen, toggleStockDialog, stockModalIsOpen, toggleProductDeleteDialog, productDeleteModalIsOpen], toggleProductFormDialog, productFormModalIsOpen)

    const confirmProductDelete = product => {
        setCurrentProduct(product)
        toggleProductDeleteDialog()
    }

    const openProductView = product => {
        setCurrentProduct(product)
        toggleViewDialog()
    }

    const openProductEdit = product => {
        setCurrentProduct(product)
        setEditMode(true)
        toggleViewDialog()
    }

    return (
        <div className="product_list">
            <ProductDialogDelete toggleProductDeleteDialog={toggleProductDeleteDialog} currentProduct={currentProduct} />
            <ProductDialogView toggleViewDialog={toggleViewDialog} currentProduct={currentProduct} />
            <ProductDialogForm toggleProductFormDialog={toggleProductFormDialog} currentProduct={currentProduct} editMode={editMode} />
            <table>
                <tr>
                    <th>Product Code</th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Group</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Added On</th>
                    <th>Added By</th>
                    <th>Actions</th>
                </tr>
                {allProducts?.map((product) =>
                    <ProductView key={`product--${product.id}`}
                        product={product}
                        confirmProductDelete={confirmProductDelete}
                        openProductView={openProductView}
                        openProductEdit={openProductEdit}
                    />)
                }
            </table>
        </div>
    )
}