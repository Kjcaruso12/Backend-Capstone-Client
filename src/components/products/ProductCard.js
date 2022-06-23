import React from "react"
import "../dashboard/Dashboard.css"

export const ProductCardView = ({ product }) => {

    return (
        <div className="product_card">
            <div className="image_container">
                {/* {product.image_path != null ? */}
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6257/6257384_sd.jpg;maxHeight=75;maxWidth=100" alt="product_image" className="top_selling_image" />
                 {/* : ""
                 } */}
            </div>
            <div className="card_info">
                <div className="top_selling_name">
                    {product.name}
                </div>
                <div className="top_selling_count">
                    {product.number_purchased}
                </div>
            </div>
        </div>
    )
}
