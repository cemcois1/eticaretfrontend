import "./Order.css"

const Order = (props) => {
    return <div className="Order">
        <h6>order key is : {props.productkey} </h6>
        <h6>order count is {props.counter}</h6>
    </div>
}
export default Order