import React, { useState} from 'react';
import { Redirect } from "react-router-dom"
import requests from "../lib/requests";
import swal from "sweetalert";
import "./Sign.css"


const SignIn = ( { authenticated, location, logIn} ) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { from } = location.state || { from: { pathname: "/" } };


    async function handleSubmit(e) {
        e.preventDefault()

        let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if(regExp.test(email)) {
            let user = {
                email: email,
                password: password
            }

            let result = await requests.postSignIn(user);

            if (result.message === "Fail") {
                swal("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.", "", "error");
                setEmail("")
                setPassword("")
            } else {
                swal({
                    title: "로그인 성공",
                    text: "",
                    icon: "success",
                    button: "확인",
                })
                user.password="********";
                //authenticated true로 변경
                logIn(user)
            }
        }
        else{
            swal("이메일 양식을 지켜주세요", "", "error");
        }
    }

    //user가 로그인 되었을 때 다시 전 페이지로 '/' or '/reviewCreate'
    if(authenticated) {
        return <Redirect to={from} />;
    }


    return (
        <form className="signForm">
            <div className="h1-top"/> <h1> 로그인 </h1>
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
            <button onClick={handleSubmit}>로그인</button>
        </form>
    )
}

export default SignIn;