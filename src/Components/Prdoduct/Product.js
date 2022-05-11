import React from "react";
import "./Product.css"

const Product = (props) => {

    const AddToCart = _ => {
        console.log("add to cart")
        props.AddtoCart(props.id)
    }

    return <div className="product">

        <div className="Image">

        </div>
        <div className="product__description">
            <div className="product__description_header"> {props.title}</div>
            <br/>
            <div> {props.price}₺</div>

        </div>

        <button  onClick={AddToCart}>click for buy</button>
    </div>
}

export default Product;