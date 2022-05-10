import CartHeader from "./CartHeader";
import OrderList from "./OrderSorter";
import "./Cart.css"

const Cart = (props) => {
    console.log(props.orders)
    return <div className="Cart">
        <CartHeader/>
        <OrderList data={props.orders}/>
        <button>Öde</button>
    </div>
}

export default Cart;