import React from "react";

const ProductSorter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onSortFuction(event.target.value)

    }
    return <div>
        <label> Money </label>
        <select value={props.sellectedCategory} onChange={dropDownChangeHandler}>
            <option value='None'> None</option>
            <option value='expensive to cheap'>Expensive to cheap</option>
            <option value='cheap to expensive'>Cheap to expensive</option>
        </select>

    </div>

}

export default ProductSorter;