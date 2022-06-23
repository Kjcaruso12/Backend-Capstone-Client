import React, { useState, useEffect } from "react"
import { getProducts } from "./ProductsManager";
import { useModalDelete, useModalView, useModalStock, useModalProductForm } from "../hooks/useModal"
import { ProductView } from "./Product"
import { ProductDialogDelete } from "./dialogs/DeleteProduct"
import { ProductDialogView } from "./dialogs/ViewProduct";
import { ProductDialogForm } from "./dialogs/ProductForm";
import "./Products.css"

export const Inventory = () => {
    const [allProducts, setAllProducts] = useState([])
    const [currentProduct, setCurrentProduct] = useState()
    const [editMode, setEditMode] = useState(false)
    let { toggleProductDeleteDialog, productDeleteModalIsOpen } = useModalDelete("#dialog--product_delete")
    let { toggleViewDialog, productViewModalIsOpen } = useModalView("#dialog--product_view")
    let { toggleStockDialog, stockModalIsOpen } = useModalStock("#dialog--stock")
    let { toggleProductFormDialog, productFormModalIsOpen } = useModalProductForm("#dialog--product_form")

    const fetchProducts = () => {
        getProducts()
            .then(setAllProducts)
    }

    useEffect(
        () => {
            fetchProducts()
        }
        , []
    )

    useEffect(() => {
        const handler = e => {
            // event keyCode = escape button and modalIsOpen
            if (e.keyCode === 27 && productFormModalIsOpen) {
                toggleProductFormDialog()
                // adds eventListener
                window.addEventListener("keyup", handler)
            }
        }
        // removes eventListener?
        return () => window.removeEventListener("keyup", handler)
    }, [toggleProductFormDialog, productFormModalIsOpen])

    useEffect(() => {
        const handler = e => {
            // event keyCode = escape button and modalIsOpen
            if (e.keyCode === 27 && productViewModalIsOpen) {
                toggleViewDialog()
                // adds eventListener
                window.addEventListener("keyup", handler)
            }
        }
        // removes eventListener?
        return () => window.removeEventListener("keyup", handler)
    }, [toggleViewDialog, productViewModalIsOpen])

    useEffect(() => {
        const handler = e => {
            // event keyCode = escape button and modalIsOpen
            if (e.keyCode === 27 && productViewModalIsOpen && stockModalIsOpen) {
                toggleStockDialog()
                // adds eventListener
                window.addEventListener("keyup", handler)
            }
        }
        // removes eventListener?
        return () => window.removeEventListener("keyup", handler)
    }, [toggleStockDialog, stockModalIsOpen, productViewModalIsOpen])

    useEffect(() => {
        const handler = e => {
            // event keyCode = escape button and modalIsOpen
            if (e.keyCode === 27 && productDeleteModalIsOpen) {
                toggleProductDeleteDialog()
                // adds eventListener
                window.addEventListener("keyup", handler)
            }
        }
        // removes eventListener?
        return () => window.removeEventListener("keyup", handler)
    }, [toggleProductDeleteDialog, productDeleteModalIsOpen])

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
        toggleProductFormDialog()
    }

    const openProductCreate = () => {
        setEditMode(false)
        toggleProductFormDialog()
    }

    return (
        <div className="product_list">
            <ProductDialogForm toggleProductFormDialog={toggleProductFormDialog} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} editMode={editMode} fetchProducts={fetchProducts} />
            <ProductDialogDelete toggleProductDeleteDialog={toggleProductDeleteDialog} currentProduct={currentProduct} fetchProducts={fetchProducts} />
            <ProductDialogView toggleViewDialog={toggleViewDialog} toggleStockDialog={toggleStockDialog} currentProduct={currentProduct} fetchProducts={fetchProducts} setCurrentProduct={setCurrentProduct} />
            <div className="inventory_header">
                <h2 className="header">Inventory Management</h2>
                <button
                    className="create_product"
                    onClick={() => openProductCreate()}>Add Item</button>
            </div>
            <table>
                <thead>
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
                </thead>
                <tbody>
                    {allProducts?.map((product) =>
                        <ProductView key={`product--${product.id}`}
                            product={product}
                            confirmProductDelete={confirmProductDelete}
                            openProductView={openProductView}
                            openProductEdit={openProductEdit}
                        />)
                    }
                </tbody>
            </table>
        </div>
    )
}