import React, {useState} from "react";
import './Payment.css'
import emailjs from "@emailjs/browser"
import ServiceID from "../PrivateKeys/ServiceID";
import templateID from "../PrivateKeys/TemplateID";
import publicKey from "../PrivateKeys/PublicKey";

const Payment = props => {
    let cartData = {
        cartNumber: "",
        cartOwnerName: "",
        SecurityCode: "",
        LastDate: ""
    }
    const SendMail = () => {
        console.log(props.getmailInfo)
        const templateParams = {
            to_mail: props.getmailInfo,
            to_name: "Müşteri",
            from_name: 'Cemal Can Yıldırım',
            message: ' bizden baya bir alışveriş yaptınız. Alışveriş tutarı:' + props.totalMoney + ' ₺',
            reply_to: 'reply_to'
        };

        emailjs.send(ServiceID, templateID, templateParams, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


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
        console.log(props.getCardNumber.length + " card-number")
        if (props.getCardNumber.length > 0) {
            SendMail()
            setTimeout(() => {
                props.setgetpaymentOpened(false)
                props.ClearAllData()
            }, 1000);
            console.log("Payment Finished")
        } else {
            console.log("Payment Failed")
        }

    }
    //console.log(props.getData())
    //props.getData().mail !== ""

    return <div className="PaymentPixelSize">
        <button value={false} onClick={event => props.setgetpaymentOpened(false)}> icon</button>
        <div  className="center">
        <div className="centeriseItems">{props.getuserloginSuccesed && props.getData().mail !== "" ?
            <div>
                <div>
                    <label>Send Payment data to my mail adress{ /*props.getData().mail*/} </label>
                    <input onChange={event => {
                        setMailSendable(true)
                    }} value={true} type="checkbox"/>
                </div>
            </div>
            :
            <h1>log in to receive your invoice in the mail</h1>
        }
        </div>
        <div>
            <div>Kart numarası : {props.getCardNumber}</div>
            <input value={props.getCardNumber} onChange={props.ChangeCardInfo} id="ccn" type="tel"
                   inputMode="numeric"
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
    </div>
}
export default Payment;