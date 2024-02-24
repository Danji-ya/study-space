import React, {Fragment} from 'react';
import { withRouter } from "react-router-dom"


const SignOut = ( {user, logOut, history} ) => {

    function handleClick() {
        logOut()
        history.push('/')
    }

    return (
        <Fragment>
            <p>{user.email}님 어서오세요</p>
            <button onClick={handleClick}>로그아웃</button>
        </Fragment>
    )
}

export default withRouter(SignOut);