import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import swal from "sweetalert";


function PermissionRoute({ authenticated, render }) {


    return (
        <Route
            render={props =>
                authenticated ? (render(props)) : (
                    swal({
                        title: "로그인이 필요한 서비스입니다.",
                        text: "",
                        icon: "success",
                        button: "확인",
                    }),
                    <Redirect
                        to={{ pathname: '/signIn', state: { from: props.location } }}
                    />
                )
            }
        />
    );
}

export default PermissionRoute;