import React from "react";
import Account, {} from "../Account/Account";

const Payment = props => {
    return <div>
        <button value={false} onClick={event => props.setgetpaymentOpened(false)}> geri dön</button>
        <h1>this is payment screen</h1>
        <div>
            <div>Kart numarası</div>
            <input type={"text"}/>
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