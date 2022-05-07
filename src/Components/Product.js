import React from "react";
import "./Product.css"

const Product = (props) => {

    return <div className="product">
        <div className="product-item"> {props.title}</div>
        <div className="product-item"> {props.price} $</div>
    </div>
}

export default Product;