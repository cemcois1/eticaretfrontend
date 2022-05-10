import React, {useState} from "react";
import "./ProductFilter.css"

const ProductFilter = (props) => {
    const [getSearchtext, setSearchtext] = useState("")

    const SetSearchtext = (value) => {
      props.onChangeFilter(value)
        setSearchtext(value)
    }

    return <div className="">
        <label className="spaceleft">Search </label>
        <input
            type="text"
            value={getSearchtext}
            onChange={event => SetSearchtext(event.target.value)}
        />

    </div>
}
export default ProductFilter