import "./Account.css"
import {useState} from "react";

const Account = () => {
    const [getuserloginSuccesed, setuserloginSuccesed] = useState(false)

    const UsersData = [{ad: "Cemal Can Yıldırım", mail: "cemal", password: "111",},
        {ad: "Bekir Onur Ayçiçek", mail: "bekir", password: "222"}]
    const verifyAccount = data => {
        const targetData = UsersData.filter(userdata => {
            if (userdata.mail == data.mail && userdata.password == data.password) {
                return true;
            }
            return false
        })
        console.log(targetData)
        return targetData
    }

    const [getmailInfo, setmailInfo] = useState("")
    const mailChanged = (event) => {
        setmailInfo(event.target.value)
    }
    const [getpasword, setpassword] = useState("")
    const passwordChanged = (event) => {
        setpassword(event.target.value)
    }

    const getData = () => {
        return {
            mail: getmailInfo,
            password: getpasword
        }
    }
    const accountData = () => {
        const data = verifyAccount(getData())
        if (data.length < 1) {
            console.log("User Not Found")
        } else {
        }
        console.log(data)
        return data

    }
    const TryLogin = event => {


        setuserloginSuccesed(accountData().length > 0 ? true : false)
        console.log(accountData().map(item=>item.ad))
    }

    return <div>
        {getuserloginSuccesed ?
            <div className="horizontal">
                <div>
                    <label className="horizontalChild">{accountData().map(item=>item.ad)} hoşgeldiniz</label>
                    <div className="horizontalMiddleSideChild">

                        <button className="" onClick={() => setuserloginSuccesed(false)}> çıkış yap
                        </button>
                    </div>
                </div>
            </div>

            : <div className="horizontal">
                <div className="horizontalChild">
                    <div className="horizontalMiddleSideChild"> Login </div>
                    <div>Mail <input value={getmailInfo} placeholder="example@mail.com" onChange={mailChanged}
                                     className=""
                                     type="text"/></div>
                    <div>Password <input value={getpasword} onChange={passwordChanged} type="password"
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