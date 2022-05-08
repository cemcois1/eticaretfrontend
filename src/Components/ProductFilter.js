import React from "react";


const ProductFilter = (props) => {
    const dropDownChangeHandler = (event) => {
       props.onChangeFilter(event.target.value)

    }
    return <div >

            <label>Filter by year </label>
            <select value={props.sellectedCategory} onChange={dropDownChangeHandler}>
                <option value='All'>Hepsi</option>
                <option value='ev'>ev</option>
                <option value='yemek'>yemek</option>
                <option value='arac'>arac</option>
            </select>
    </div>
}
export default ProductFilter