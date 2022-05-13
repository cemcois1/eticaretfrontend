import React, {useState} from "react";
import Account, {} from "../Account/Account";

const Payment = props => {

    console.log()
    return <div>

        {props.getData().mail !== "" ?
            <div>
                <h1>worked</h1>
                <div>{props.getData().mail} is mail adress</div>
                <div>{props.getData().password} is password </div>
            </div>
            :
            <h1>verify failed</h1>
        }
        <button value={false} onClick={event => props.setgetpaymentOpened(false)}> geri dön</button>
        <h1>this is payment screen</h1>
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
            <div>Ödenecek tutar</div>
            <button>Öde</button>
        </div>
    </div>
}
export default Payment;