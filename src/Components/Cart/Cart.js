import CartHeader from "./CartHeader";
import OrderList from "./OrderList";
import "./Cart.css"

const Cart = (props) => {
    const HandleRemoving = value => {
        props.RemoveOrder(value)
    }
    const OpenpaymentScreen = event => {
        props.OpenpaymentScreen(event.target.value)
    }
    return <div className="Cart">
        <CartHeader/>
        <OrderList HandleRemoving={HandleRemoving} cartInfo={props.itemDatas} data={props.orders}/>
        <button value={true} onClick={OpenpaymentScreen}>Öde</button>
    </div>
}

export default Cart;