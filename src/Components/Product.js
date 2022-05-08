import React from "react";
import "./Product.css"

const Product = (props) => {
    console.log(props.imageRef)
    return <div className="product">

        <div className="colorise">

        </div>
        <div className="product__description">
            <div className="product__description_header"> {props.title}</div>
            <br/>
            <div> {props.price}$</div>

        </div>

        <button>click for buy</button>
    </div>
}

export default Product;