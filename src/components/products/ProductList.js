import React, { useState, useEffect } from "react"
import { getProducts } from "./ProductsManager";
import { getProfile } from "../users/UserManager";
import { useModalDelete, useModalView, useModalStock } from "../hooks/useModal"
import { ProductView } from "./Product"
import { ProductDialogDelete, ProductDialogView } from "./ProductDialog";


export const Inventory = () => {
    const [allProducts, setAllProducts] = useState([])
    const [currentProduct, setCurrentProduct] = useState({})
    let { toggleProductDeleteDialog, ProductDeleteModalIsOpen } = useModalDelete("#dialog--product_delete")
    let { toggleViewDialog, ProductViewModalIsOpen } = useModalView("#dialog--product_view")
    let { toggleStockDialog, stockModalIsOpen } = useModalStock("#dialog--stock")

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

    useEffect(() => {
        const handler = e => {
            // event keyCode = escape button and modalIsOpen
            if (e.keyCode === 27 && ProductDeleteModalIsOpen) {
                // run toggleDialog()
                toggleProductDeleteDialog()
            }
        }
        // adds eventListener
        window.addEventListener("keyup", handler)
        // removes eventListener?
        return () => window.removeEventListener("keyup", handler)
    }, [toggleProductDeleteDialog, ProductDeleteModalIsOpen])

    useEffect(() => {
        const handler = e => {
            // event keyCode = escape button and modalIsOpen
            if (e.keyCode === 27 && ProductViewModalIsOpen && stockModalIsOpen) {
                // run toggleDialog()
                toggleStockDialog()
            }
            else if (e.keyCode === 27 && ProductViewModalIsOpen) {
                toggleViewDialog()
            }
        }
        // adds eventListener
        window.addEventListener("keyup", handler)
        // removes eventListener?
        return () => window.removeEventListener("keyup", handler)
    }, [toggleViewDialog, ProductViewModalIsOpen])

    const confirmProductDelete = product => {
        setCurrentProduct(product)
        toggleProductDeleteDialog()
    }

    const openProductView = product => {
        setCurrentProduct(product)
        toggleViewDialog()
    }

    return (
        <div className="product_list">
            <ProductDialogDelete toggleProductDeleteDialog={toggleProductDeleteDialog} currentProduct={currentProduct} />
            <ProductDialogView toggleViewDialog={toggleViewDialog} currentProduct={currentProduct} />
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
                    />)
                }
            </table>
        </div>
    )
}