import React from "react";

const ProductCategoriser = (props) => {

    const dropDownChangeHandler = (event) => {
        props.onSortFuction(event.target.value)

    }

    return <div>
        <div>
            <label>Type </label>
            <select value={props.sellectedCategory} onChange={dropDownChangeHandler}>
                <option value='None'> None</option>
                <option value='expensive to cheap'>Expensive to cheap</option>
                <option value='cheap to expensive'>Cheap to expensive</option>
            </select>

        </div>
    </div>


}

export default ProductCategoriser;