import "./Account.css"
import {useState} from "react";


const Account = props => {

    const TryLogin = event => {


        props.setuserloginSuccesed(props.accountData().length > 0 ? true : false)
        console.log(props.accountData().map(item => item.ad))
    }

    return <div>
        {props.getuserloginSuccesed ?
            <div className="horizontal">
                <div>
                    <label className="horizontalChild">{props.accountData().map(item => item.ad)} hoşgeldiniz</label>
                    <div className="horizontalMiddleSideChild">

                        <button className="" onClick={() => {
                            props.setuserloginSuccesed(false)
                            props.setmailInfo("")
                        }}> çıkış yap
                        </button>
                    </div>
                </div>
            </div>

            : <div className="horizontal">
                <div className="horizontalChild">
                    <div className="horizontalMiddleSideChild"> Login</div>
                    <div>Mail <input value={props.getmailInfo} placeholder="example@mail.com" onChange={props.mailChanged}
                                     className=""
                                     type="text"/></div>
                    <div>Password <input value={props.getpasword} onChange={props.passwordChanged} type="password"
                                         placeholder="Enter your password"/></div>
                    <div className="button">
                        <button onClick={TryLogin}>Login</button>
                    </div>
                </div>

            </div>

        }


    </div>
}
export default Account;