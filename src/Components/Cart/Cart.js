import CartHeader from "./CartHeader";
import OrderList from "./OrderList";
import "./Cart.css"
import React, {useState} from "react";

const Cart = (props) => {

    const HandleRemoving = value => {
        props.RemoveOrder(value)
    }
    const OpenpaymentScreen = event => {
        props.OpenpaymentScreen(event.target.value)
    }
    return <div className="Cart">
        <CartHeader/>
        <OrderList updateTotalMoney={props.updateTotalMoney} settotalMoney={props.settotalMoney} HandleRemoving={HandleRemoving}
                   cartInfo={props.itemDatas} data={props.orders}/>
        <button value={true} onClick={OpenpaymentScreen}>Öde</button>
        <div>total is {props.gettotalMoney} ₺</div>

    </div>
}

export default Cart;