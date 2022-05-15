import Order from "./Order/Order";
import React from "react";

const OrderList = (props) => {
    const HandleRemoving = value => {
        props.HandleRemoving(value)

    }
    const displayOrders = () => {
        return props.data.map((orderDesc) => {
            if (orderDesc.counter < 1) {
                return <div></div>
            } else {
                return (<div key={orderDesc.key}>
                        <Order updateTotalMoney={props.updateTotalMoney} HandleRemoving={HandleRemoving}
                               cartInfo={props.cartInfo} counter={orderDesc.counter}
                               productkey={orderDesc.key}/>
                    </div>

                )
            }
        })
    }
    return <div className="App">
        {displayOrders()}
    </div>
}

export default OrderList