import React, {useState} from "react";

const Payment = props => {
    let cartData = {
        cartNumber: "",
        cartOwnerName: "",
        SecurityCode: "",
        LastDate: ""
    }
    const SendMail = () => {
        cartData.cartNumber = props.getCardNumber
        console.log("Mail gönder")
        if (getMailSendable) {
            console.log("true")

        } else {
            console.log("false")

        }
    }
    const [getMailSendable, setMailSendable] = useState(false)
    const Pay = () => {
        if (props.getCardNumber.length > 0 && cartData.cartOwnerName.length > 1)
            SendMail()
        console.log("Payment Finished")
        setTimeout(() => {
            props.setgetpaymentOpened(false)
            props.ClearAllData()
        }, 1000);
    }
    //console.log(props.getData())
    //props.getData().mail !== ""

    return <div>
        <button value={false} onClick={event => props.setgetpaymentOpened(false)}> icon</button>
        {props.getuserloginSuccesed && props.getData().mail !== "" ?
            <div>
                <div>
                    <label>Send Payment data to my mail adress{ /*props.getData().mail*/} </label>
                    <input onChange={event => {
                        setMailSendable(true)
                    }} value={true} type="checkbox"/>
                </div>
                <div>{props.getData().ad} is password</div>
            </div>
            :
            <h1>log in to receive your invoice in the mail</h1>
        }
        <div>
            <div>Kart numarası : {props.getCardNumber}</div>
            <input value={props.getCardNumber} onChange={props.ChangeCardInfo} id="ccn" type="tel" inputMode="numeric"
                   pattern="[0-9\s]{13,19}"
                   placeholder="xxxx xxxx xxxx xxxx"/>
            <div>Kart üstündeki isim</div>
            <input onChange={event => cartData.cartOwnerName = event.target.value} type={"text"}/>
            <div>Son kullanma tarihi</div>
            <input onChange={event => cartData.LastDate = event.target.value + ""} type={"text"}/>
            <div>güvenlik kodu</div>
            <input type={"text"}/>

        </div>
        <div>
            <div>Ödenecek tutar : {props.totalMoney} ₺</div>
            <button onClick={Pay}>Öde</button>

        </div>
    </div>
}
export default Payment;