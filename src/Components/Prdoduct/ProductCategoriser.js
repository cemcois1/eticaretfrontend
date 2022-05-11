import React from "react";

const ProductCategoriser = (props) => {

    const dropDownChangeHandler = (event) => {
        props.onSortFuction(event.target.value)

    }

    return <div>
        <div>
            <label>Type </label>
            <select value={props.sellectedCategory} onChange={dropDownChangeHandler}>
                <option value='All'> All</option>
                <option value='TV'>TV</option>
                <option value='PC'>PC</option>
            </select>

        </div>
    </div>


}

export default ProductCategoriser;