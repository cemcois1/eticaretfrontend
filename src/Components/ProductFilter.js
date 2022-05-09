import React from "react";
import "./ProductFilter.css"
const ProductFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)

    }
    return <div className="">

        <label>Computer Type </label>
        <select value={props.sellectedCategory} onChange={dropDownChangeHandler}>
            <option value='All'>Hepsi</option>
            <option value='Asus'>Asus</option>
            <option value='Monster'>Monster</option>
            <option value='Apple'>Apple</option>
        </select>
    </div>
}
export default ProductFilter