import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";

export const getProducts = () => {
    return fetchIt(`${Settings.API}/products`)
}

export const getSingleProduct = (product) => {
    return fetchIt(`${Settings.API}/products/${product.id}`)
}

export const addProduct = (product) => {
    return fetchIt(`${Settings.API}/products}`, "POST", JSON.stringify(product))
}

export const deleteProduct = (product) => {
    return fetchIt(`${Settings.API}/products/${product.id}`, "DELETE")
}

export const editProduct = (product) => {
    return fetchIt(`${Settings.API}/products/${product.id}`, "PUT", JSON.stringify(product))
}