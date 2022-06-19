import { useState } from "react"

export const useModalDelete = (selector) => {

    const [ProductDeleteModalIsOpen, setModalIsOpen] = useState(false)

    const toggleProductDeleteDialog = () => {
        setModalIsOpen(!ProductDeleteModalIsOpen)

        if (ProductDeleteModalIsOpen) {
            document.querySelector(`${selector}`).removeAttribute("open")
        } else {
            document.querySelector(`${selector}`).setAttribute("open", true)
        }
    }

    return { toggleProductDeleteDialog, ProductDeleteModalIsOpen }
}

export const useModalView = (selector) => {

    const [ProductViewModalIsOpen, setModalIsOpen] = useState(false)

    const toggleViewDialog = () => {
        setModalIsOpen(!ProductViewModalIsOpen)

        if (ProductViewModalIsOpen) {
            document.querySelector(`${selector}`).removeAttribute("open")
        } else {
            document.querySelector(`${selector}`).setAttribute("open", true)
        }
    }

    return { toggleViewDialog, ProductViewModalIsOpen }
}

export const useModalStock = (selector) => {

    const [stockModalIsOpen, setStockModalIsOpen] = useState(false)

    const toggleStockDialog = () => {
        setStockModalIsOpen(!stockModalIsOpen)

        if (stockModalIsOpen) {
            document.querySelector(`${selector}`).removeAttribute("open")
        } else {
            document.querySelector(`${selector}`).setAttribute("open", true)
        }
    }

    return { toggleStockDialog, stockModalIsOpen }
}

export const useModalProductForm = (selector) => {

    const [productFormModalIsOpen, setProductFormModalIsOpen] = useState(false)

    const toggleProductFormDialog = () => {
        setProductFormModalIsOpen(!productFormModalIsOpen)

        if (productFormModalIsOpen) {
            document.querySelector(`${selector}`).removeAttribute("open")
        } else {
            document.querySelector(`${selector}`).setAttribute("open", true)
        }
    }

    return { toggleProductFormDialog, productFormModalIsOpen }
}


