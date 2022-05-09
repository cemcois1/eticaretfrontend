import Order from "./Order/Order";
import OrderArray from "./OrderArray";
import React, {useState} from "react";

const OrderSorter = () => {

    const displayOrders = () => {
        return  OrderArray.map((orderDesc) => {
            return (<div key={orderDesc.key}>
                <Order/>
            </div>)
        })
    }
    return <div>
        {displayOrders()}


    </div>
}

export default OrderSorter