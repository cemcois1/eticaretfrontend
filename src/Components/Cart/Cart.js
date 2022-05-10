import CartHeader from "./CartHeader";
import OrderList from "./OrderList";
import "./Cart.css"

const Cart = (props) => {
    return <div className="Cart">
        <CartHeader/>
        <OrderList data={props.orders}/>
        <button>Öde</button>
    </div>
}

export default Cart;