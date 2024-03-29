import React, {useState} from 'react';
import requests from "../lib/requests";
import swal from 'sweetalert';
import "./Sign.css"



const SignUp = ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if(regExp.test(email)) {
            let user = {
                email: email,
                password: password
            }

            let result = await requests.postSignUp(user);

            if (result.message === "Success") {
                swal({
                    title: "회원가입 완료",
                    text: "",
                    icon: "success",
                    button: "확인",
                })
                history.goBack()
            } else {
                swal(result.message, "", "error");
                setEmail("")
                setPassword("")
            }

        }
        else{
            swal("이메일 양식을 지켜주세요", "", "error");
        }
    }

    return (
        <form className="signForm">
            <div className="h1-top"/> <h1> 회원가입 </h1>
            <label className="label-top"></label>
            <input
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                type="text"
                placeholder="email"
            />
            <input
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                maxLength="15"
                placeholder="password"
            />
            <button onClick={handleSubmit}>회원가입</button>
        </form>
    )
}

export default SignUp;