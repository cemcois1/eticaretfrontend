import React, {useState} from "react";
import "./ProductSearcher.css"

const ProductSearcher = (props) => {
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
export default ProductSearcher