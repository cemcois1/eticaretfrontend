import Order from "./Order/Order";
import React, {useState} from "react";

const OrderList  = (props) => {

    const displayOrders = () => {

        return  props.data.map((orderDesc) => {
            return (<div key={orderDesc.key}>
                <Order counter={orderDesc.counter} productkey={orderDesc.key}/>
            </div>)
        })
    }
    return <div>
        {displayOrders()}


    </div>
}

export default OrderList