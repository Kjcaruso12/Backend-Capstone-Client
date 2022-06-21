import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";

export const getInvoices = () => {
    return fetchIt(`${Settings.API}/invoices`)
}

export const getAllOrderProducts = () => {
    return fetchIt(`${Settings.API}/order_products`)
}

export const addInvoice = (invoice) => {
    return fetchIt(`${Settings.API}/invoices}`, "POST", JSON.stringify(invoice))
}

export const deleteInvoice = (invoice) => {
    return fetchIt(`${Settings.API}/invoices/${invoice.id}`, "DELETE")
}

export const editInvoice = (invoice) => {
    return fetchIt(`${Settings.API}/invoices/${invoice.id}`, "PUT", JSON.stringify(invoice))
}

export const getCurrentOrder = () => {
    return fetchIt(`${Settings.API}/orders/current`)
}

export const addToOrder = (product) => {
    return fetchIt(`${Settings.API}/products/${product.id}/add_to_order`, "POST", JSON.stringify(product))
}

export const removeFromOrder = (product) => {
    return fetchIt(`${Settings.API}/products/${product.id}/remove_from_order`, "DELETE")
}

export const deleteOrder = (order) => {
    return fetchIt(`${Settings.API}/orders/${order.id}`, "DELETE")
}