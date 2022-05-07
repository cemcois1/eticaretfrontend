import React from "react";
import Product from "./Product";

const Products = (props) => {
    return (
        <div>
            {props.itemDatas.map((itemData) => {
                    return (<div key={itemData.id}><Product id={itemData.id} title={itemData.title} price={itemData.amount}/></div>)
                }
            )}
        < /div>)
}

export default Products;