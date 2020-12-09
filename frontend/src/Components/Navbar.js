import React from 'react'
import {Link} from "react-router-dom"


const Navbar = ( {authenticated}) => {

    return (
        <div id="navbar">
            <div id="menu">
                <ul>
                    <li><Link className="a" to="/">메인</Link></li>
                    <li><Link className="a" to="/RestMenu">휴게소 메뉴</Link></li>
                    <li><Link className="a" to="/ReviewCreate">리뷰 작성</Link></li>
                    { authenticated ? "" : <li><Link className="a" to="/SignUp">회원 가입</Link></li> }
                    <li><a className="a" href="mailto:erang15@ajou.ac.kr">지원</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;