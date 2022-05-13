import "./Order.css"

const Order = (props) => {
    const HandleRemoving = () => {
        console.log("Runned")
        props.HandleRemoving(props.productkey)
    }

    const CartInfo = () => {
        props.updateTotalMoney()
        return props.cartInfo.filter(item => {
            if (item.id == props.productkey) {
                return true;
            }
            return false;
        }).map(item => {
            return <div className="listeleYatay" key={props.productkey}>{item.title.substring(0, 20)}...
                <div className="">{item.amount}₺</div>
                <div className="CartText">{props.counter}</div>
                <button onClick={HandleRemoving}>remove</button>
            </div>
        })
    }
    return <div className="Order">
        <div className="listeleYatay">
            {CartInfo()}

        </div>
    </div>
}
export default Order