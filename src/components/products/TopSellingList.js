import React from "react"
import { ProductCardView } from "./ProductCard"
import "../dashboard/Dashboard.css"

export const TopSellingList = ({ topProducts }) => {

    return (
        <div className="top_selling_list">
            {topProducts?.map((product) =>
                <ProductCardView key={`product--${product.id}`}
                    product={product}
                />)
            }
        </div>
    )
}