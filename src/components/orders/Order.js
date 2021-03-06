import { removeFromOrder } from "../invoices/InvoiceManager"
import { TiDeleteOutline } from "react-icons/ti"

export const OrderView = ({ product, refreshCart, refreshOrder }) => {

    const updateCart = (updatedProduct) => {
        removeFromOrder(updatedProduct.product)
            .then(() => refreshCart())
                .then(() => refreshOrder())
    }

    return (
        <tr className="single_product">
            <td>{product.product.name}</td>
            <td>{product.quantity}</td>
            <td>${product.product.price}</td>
            <td>${product.total}</td>
            <td>
                <button
                    className="remove_from_order"
                    onClick={() => updateCart(product)}>
                    {TiDeleteOutline()}
                </button>
            </td>
        </tr>
    )
}