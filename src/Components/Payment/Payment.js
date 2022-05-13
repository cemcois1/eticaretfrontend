import React, {useState} from "react";
import Account, {} from "../Account/Account";


const Payment = props => {
    const SendMail = () => {
        if (getMailSendable){
            console.log("true")

        }else{
            console.log("false")

        }
    }
    const [getMailSendable, setMailSendable] = useState(false)
    const Pay = () => {
        SendMail()
    }
    //console.log(props.getData())
    //props.getData().mail !== ""
    return <div>
        <button value={false} onClick={event => props.setgetpaymentOpened(false)}> geri dön</button>
        <h1>this is payment screen</h1>
        {props.getData().mail !== "" ?
            <div>
                <div>
                    <label>Send Payment data to my mail adress{ /*props.getData().mail*/} </label>
                    <input onChange={event => {
                        setMailSendable(true)
                    }} value={true}  type="checkbox"/>
                </div>
                <div>{props.getData().ad} is password</div>
            </div>
            :
            <h1>verify failed</h1>
        }
        <div>
            <div>Kart numarası : {props.getCardNumber}</div>
            <input value={props.getCardNumber} onChange={props.ChangeCardInfo} id="ccn" type="tel" inputMode="numeric"
                   pattern="[0-9\s]{13,19}"
                   placeholder="xxxx xxxx xxxx xxxx"/>
            <div>Kart üstündeki isim</div>
            <input type={"text"}/>
            <div>Son kullanma tarihi</div>
            <input type={"text"}/>
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