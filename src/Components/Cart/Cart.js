import CartHeader from "./CartHeader";
import OrderList from "./OrderList";
import "./Cart.css"

const Cart = (props) => {
    const HandleRemoving = value => {
                props.RemoveOrder(value)
    }
    return <div className="Cart">
        <CartHeader/>
        <OrderList HandleRemoving={HandleRemoving} cartInfo={props.itemDatas} data={props.orders}/>
        <button>Öde</button>
    </div>
}

export default Cart;