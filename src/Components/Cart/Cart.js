import CartHeader from "./CartHeader";
import OrderList from "./OrderList";
import "./Cart.css"
import React, {useState} from "react";

const Cart = (props) => {
    const [gettotalMoney, settotalMoney] = useState(0)
    const updateTotalMoney = () => {
        let totalmoney = 0
        props.orders.map(order => {
            //(order.key)
            //(itemdata.amount)
            (props.itemDatas.filter(itemdata => itemdata.id == order.key).map(item => {
                if (item.amount > 0) {
                    totalmoney += item.amount*order.counter

                }
            }))
            settotalMoney(totalmoney)
        })
        // props.orders.map(order => console.log(order.amount)).map(amount => totalmoney += amount)


    }
    const HandleRemoving = value => {
        props.RemoveOrder(value)
    }
    const OpenpaymentScreen = event => {
        props.OpenpaymentScreen(event.target.value)
    }
    return <div className="Cart">
        <CartHeader/>
        <OrderList updateTotalMoney={updateTotalMoney} settotalMoney={settotalMoney} HandleRemoving={HandleRemoving}
                   cartInfo={props.itemDatas} data={props.orders}/>
        <button value={true} onClick={OpenpaymentScreen}>Öde</button>
        <div>total is {gettotalMoney}</div>

    </div>
}

export default Cart;