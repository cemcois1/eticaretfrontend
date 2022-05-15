import React from "react";
import './ProductCategoriser.css'
const ProductCategoriser = (props) => {

    const dropDownChangeHandler = (event) => {
        props.onSortFuction(event.target.value)

    }

    return <div>
            <label>Type </label>
            <select value={props.sellectedCategory} onChange={dropDownChangeHandler}>
                <option value='All'> All</option>
                <option value='TV'>TV</option>
                <option value='PC'>PC</option>
            </select>

    </div>


}

export default ProductCategoriser;