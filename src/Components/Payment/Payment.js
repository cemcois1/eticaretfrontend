import React, {useState} from "react";
import Account, {} from "../Account/Account";

const Payment = props => {
    const [getCardNumber, setCardNumber] = useState("")
    const ChangeCardInfo = event => {
        if (event.target.value.length < getCardNumber.length) {
            setCardNumber(event.target.value)
            return
        }
        if (event.target.value.length > 19) {
            console.log("19 haneden fazla yazamazsın")
            return;
        }

        if (event.target.value.length == 4 || event.target.value.length == 9 || event.target.value.length == 14) {
            setCardNumber(event.target.value + "-")
        } else {
            setCardNumber(event.target.value)
        }

    }
    return <div>
        <button value={false} onClick={event => props.setgetpaymentOpened(false)}> geri dön</button>
        <h1>this is payment screen</h1>
        <div>
            <div>Kart numarası : {getCardNumber}</div>
            <input value={getCardNumber} onChange={ChangeCardInfo} id="ccn" type="tel" inputMode="numeric"
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
            <div>Ödenecek tutar</div>
            <button>Öde</button>
        </div>
    </div>
}
export default Payment;