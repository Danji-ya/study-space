import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {


    return (
        <div id="navbar">
            <div id="menu">
                <ul>
                    <li><Link className="a" to="/">메인</Link></li>
                    <li><Link className="a" to="/RestMenu">휴게소 메뉴</Link></li>
                    <li><Link className="a" to="/ReviewCreate">리뷰 작성</Link></li>
                    <li><Link className="a" to="mailto:erang15@ajou.ac.kr">지원</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;