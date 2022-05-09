import CartHeader from "./CartHeader";
import OrderSorter from "./OrderSorter";
import "./Cart.css"
const Cart = () => {
    return <div className="Cart">
        <CartHeader/>
        <OrderSorter/>
    </div>
}

export default Cart;